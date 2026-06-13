import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';
import { HighlightedCaptionComponent } from '../../components/highlighted-caption/highlighted-caption.component';

type GamePhase = 'memorize' | 'shuffling' | 'guess' | 'revealed' | 'complete';

interface DisplayItem {
  flashcard: Flashcard;
  slotIndex: number;
  visible: boolean;
  isRemoving: boolean;
  isRemoved: boolean;
  chaosX: number;
  chaosY: number;
  chaosRotation: number;
  chaosScale: number;
  opacity: number;
  zIndex: number;
}

@Component({
  selector: 'fg-whats-missing',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent, HighlightedCaptionComponent],
  templateUrl: './whats-missing.component.html',
  styleUrl: './whats-missing.component.scss'
})
export class WhatsMissingComponent implements OnInit, OnDestroy {
  private static readonly SLOT_WIDTH = 140;
  private static readonly SLOT_GAP = 20;
  private static readonly TOTAL_SLOTS = 6;
  private static readonly MIN_CARDS = 5;
  private static readonly MAX_CARDS = 6;
  private static readonly SHUFFLE_DURATION_MS = 5000;
  private static readonly SHUFFLE_STEP_MS = 400;

  selectedSets: FlashcardSet[] = [];
  flashcardPool: Flashcard[] = [];
  displayItems: DisplayItem[] = [];
  removedFlashcard: Flashcard | null = null;
  phase: GamePhase = 'memorize';
  countdownSeconds = 0;
  roundsPlayed = 0;
  insufficientCards = false;
  gameId = '';

  private timeouts: ReturnType<typeof setTimeout>[] = [];
  private countdownInterval: ReturnType<typeof setInterval> | null = null;
  private shuffleInterval: ReturnType<typeof setInterval> | null = null;

  constructor(
    private flashcardService: FlashcardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const setsParam = this.route.snapshot.queryParams['sets'];
    if (!setsParam) {
      this.router.navigate(['/']);
      return;
    }

    const setIds = setsParam.split(',').filter((id: string) => id.trim() !== '');
    if (setIds.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    const urlSegments = this.route.snapshot.url;
    this.gameId = urlSegments.length > 1 ? urlSegments[1].path : '';

    const allSets = this.flashcardService.getAllSets();
    this.selectedSets = allSets.filter(s => setIds.includes(s.id));

    if (this.selectedSets.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    this.initializeGame();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  initializeGame(): void {
    if (this.selectedSets.length === 0) return;

    const setIds = this.selectedSets.map(s => s.id);
    this.flashcardPool = this.flashcardService.getFlashcardsBySetIds(setIds);
    this.roundsPlayed = 0;
    this.insufficientCards = this.flashcardPool.length < WhatsMissingComponent.MIN_CARDS;

    if (!this.insufficientCards) {
      this.startRound();
    }
  }

  startRound(): void {
    this.clearTimers();
    this.removedFlashcard = null;

    const maxCount = Math.min(WhatsMissingComponent.MAX_CARDS, this.flashcardPool.length);
    const minCount = Math.min(WhatsMissingComponent.MIN_CARDS, this.flashcardPool.length);
    const count = minCount === maxCount
      ? minCount
      : minCount + Math.floor(Math.random() * (maxCount - minCount + 1));

    const shuffled = [...this.flashcardPool];
    this.shuffleArray(shuffled);
    const roundCards = shuffled.slice(0, count);

    const removedIndex = Math.floor(Math.random() * roundCards.length);
    this.removedFlashcard = roundCards[removedIndex];

    this.displayItems = roundCards.map((flashcard, index) => ({
      flashcard,
      slotIndex: index,
      visible: true,
      isRemoving: false,
      isRemoved: flashcard.id === this.removedFlashcard!.id,
      chaosX: 0,
      chaosY: 0,
      chaosRotation: 0,
      chaosScale: 1,
      opacity: 1,
      zIndex: 1
    }));

    this.phase = 'memorize';
    const memorizeDurationMs = 5000 + Math.random() * 5000;
    this.countdownSeconds = Math.ceil(memorizeDurationMs / 1000);

    this.countdownInterval = setInterval(() => {
      this.countdownSeconds = Math.max(0, this.countdownSeconds - 1);
    }, 1000);

    this.scheduleTimeout(() => {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
      }
      this.startShuffle();
    }, memorizeDurationMs);
  }

  startShuffle(): void {
    this.phase = 'shuffling';
    const count = this.displayItems.length;
    const victim = this.displayItems.find(item => item.isRemoved);

    for (const item of this.displayItems) {
      item.chaosX = this.getSlotX(item.slotIndex, count);
      item.chaosY = 0;
      item.chaosRotation = 0;
      item.chaosScale = 1;
      item.opacity = 1;
      item.zIndex = item.isRemoved ? 1 : 2;
    }

    let step = 0;

    this.shuffleInterval = setInterval(() => {
      step++;
      const slotOrder = this.createShuffledIndices(count);
      let survivorIdx = 0;

      for (const item of this.displayItems) {
        if (item.isRemoved) {
          continue;
        }

        const slot = slotOrder[survivorIdx++];
        item.chaosX = this.getSlotX(slot, count) + this.randomJitter(70);
        item.chaosY = this.randomJitter(90);
        item.chaosRotation = this.randomJitter(28);
        item.chaosScale = 0.92 + Math.random() * 0.16;
        item.zIndex = 4 + Math.floor(Math.random() * 6);
      }

      if (victim?.visible) {
        victim.chaosX = this.getSlotX(Math.floor(Math.random() * count), count) + this.randomJitter(90);
        victim.chaosY = this.randomJitter(110);
        victim.chaosRotation = this.randomJitter(32);
        victim.zIndex = 0;

        if (step >= 4) {
          victim.chaosScale = Math.max(0.75, victim.chaosScale - 0.02);
          victim.opacity = Math.max(0, victim.opacity - 0.045);
        }

        if (step >= 7) {
          victim.opacity = Math.max(0, victim.opacity - 0.07);
        }

        if (victim.opacity <= 0.12) {
          victim.isRemoving = true;
        }
      }
    }, WhatsMissingComponent.SHUFFLE_STEP_MS);

    this.scheduleTimeout(() => {
      if (this.shuffleInterval) {
        clearInterval(this.shuffleInterval);
        this.shuffleInterval = null;
      }

      if (victim) {
        victim.visible = false;
      }

      const survivors = this.displayItems.filter(item => !item.isRemoved);
      survivors.forEach((item, index) => {
        item.slotIndex = index;
        item.opacity = 1;
        item.chaosScale = 1;
        item.chaosRotation = 0;
        item.chaosY = 0;
      });

      this.phase = 'guess';
    }, WhatsMissingComponent.SHUFFLE_DURATION_MS);
  }

  revealAnswer(): void {
    if (this.phase !== 'guess') return;
    this.phase = 'revealed';
  }

  nextRound(): void {
    if (this.phase !== 'revealed') return;
    this.roundsPlayed++;
    this.startRound();
  }

  completeGame(): void {
    this.clearTimers();
    this.phase = 'complete';
  }

  restartGame(): void {
    this.initializeGame();
  }

  get phasePrompt(): string {
    switch (this.phase) {
      case 'memorize':
        return 'Remember these pictures!';
      case 'shuffling':
        return '';
      case 'guess':
        return 'What was missing?';
      case 'revealed':
        return 'It was:';
      default:
        return '';
    }
  }

  getVisibleItems(): DisplayItem[] {
    if (this.phase === 'shuffling') {
      return this.displayItems.filter(item => item.visible || item.opacity > 0);
    }
    return this.displayItems.filter(item => item.visible);
  }

  getSlotCount(): number {
    if (this.phase === 'guess' || this.phase === 'revealed') {
      return this.displayItems.filter(item => !item.isRemoved).length;
    }
    return this.displayItems.length;
  }

  getItemTransform(item: DisplayItem): string {
    if (this.phase === 'shuffling') {
      return `translate(${item.chaosX}px, ${item.chaosY}px) rotate(${item.chaosRotation}deg) scale(${item.chaosScale})`;
    }

    const count = this.getSlotCount();
    const x = this.getSlotX(item.slotIndex, count);
    return `translateX(${x}px)`;
  }

  getCompletionMessage(): string {
    const roundLabel = this.roundsPlayed === 1 ? 'round' : 'rounds';
    return `You played ${this.roundsPlayed} ${roundLabel}!\n\nGreat memory practice!`;
  }

  getHighlightPatterns(flashcardId: string): string[] | undefined {
    return this.flashcardService.getHighlightPatternsForFlashcard(flashcardId, this.selectedSets);
  }

  goBack(): void {
    this.clearTimers();
    if (this.gameId) {
      this.router.navigate(['/sets', this.gameId, 'select']);
    } else {
      this.router.navigate(['/']);
    }
  }

  private getSlotX(slotIndex: number, count: number): number {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const slotWidth = isMobile ? 100 : WhatsMissingComponent.SLOT_WIDTH;
    const slotGap = isMobile ? 12 : WhatsMissingComponent.SLOT_GAP;
    const slotSize = slotWidth + slotGap;
    const offset = ((WhatsMissingComponent.TOTAL_SLOTS - count) / 2) * slotSize;
    return offset + slotIndex * slotSize;
  }

  private randomJitter(range: number): number {
    return (Math.random() - 0.5) * range;
  }

  private createShuffledIndices(length: number): number[] {
    const indices = Array.from({ length }, (_, i) => i);
    this.shuffleArray(indices);
    return indices;
  }

  private shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private scheduleTimeout(callback: () => void, delay: number): void {
    const timeoutId = setTimeout(callback, delay);
    this.timeouts.push(timeoutId);
  }

  private clearTimers(): void {
    this.timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    this.timeouts = [];

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }

    if (this.shuffleInterval) {
      clearInterval(this.shuffleInterval);
      this.shuffleInterval = null;
    }
  }
}
