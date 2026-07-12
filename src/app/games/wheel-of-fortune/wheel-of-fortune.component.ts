import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard, Prize } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { PrizeService } from '../../services/prize.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightedCaptionComponent } from '../../components/highlighted-caption/highlighted-caption.component';

interface WheelAction {
  id: string;
  label: string;
  emoji: string;
}

interface WheelSector {
  kind: 'flashcard' | 'prize' | 'action';
  color: string;
  flashcard?: Flashcard;
  prize?: Prize;
  action?: WheelAction;
}

@Component({
  selector: 'fg-wheel-of-fortune',
  standalone: true,
  imports: [CommonModule, HighlightedCaptionComponent],
  templateUrl: './wheel-of-fortune.component.html',
  styleUrl: './wheel-of-fortune.component.scss'
})
export class WheelOfFortuneComponent implements OnInit, OnDestroy {
  private static readonly SPIN_DURATION_MS = 4500;
  private static readonly MIN_FULL_TURNS = 4;
  private static readonly MAX_EXTRA_TURNS = 3;
  private static readonly PRIZE_COUNT = 3;
  private static readonly SECTOR_COLORS = [
    '#e53935',
    '#fb8c00',
    '#fdd835',
    '#43a047',
    '#1e88e5',
    '#8e24aa',
    '#00acc1',
    '#d81b60',
    '#6d4c41',
    '#546e7a'
  ];
  private static readonly ACTIONS: WheelAction[] = [
    { id: 'clap', label: 'Clap your hands', emoji: '👏' },
    { id: 'stamp', label: 'Stamp your feet', emoji: '🦶' },
    { id: 'brush', label: 'Brush your teeth', emoji: '🪥' }
  ];

  selectedSets: FlashcardSet[] = [];
  sectors: WheelSector[] = [];
  gameId = '';
  noFlashcards = false;

  rotation = 0;
  isSpinning = false;
  showResult = false;
  resultSector: WheelSector | null = null;
  pointerFlick = false;

  private spinTimeout: ReturnType<typeof setTimeout> | null = null;
  private pointerTimeout: ReturnType<typeof setTimeout> | null = null;
  private pointerResetTimeout: ReturnType<typeof setTimeout> | null = null;
  private pendingResultIndex: number | null = null;

  constructor(
    private flashcardService: FlashcardService,
    private prizeService: PrizeService,
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
    this.clearSpinTimeout();
    this.clearPointerTimers();
  }

  initializeGame(): void {
    if (this.selectedSets.length === 0) return;

    const setIds = this.selectedSets.map(s => s.id);
    const flashcards = this.flashcardService.getFlashcardsBySetIds(setIds);
    this.noFlashcards = flashcards.length === 0;

    if (this.noFlashcards) {
      this.sectors = [];
      return;
    }

    const sectors: WheelSector[] = flashcards.map(flashcard => ({
      kind: 'flashcard' as const,
      flashcard,
      color: ''
    }));

    for (const prize of this.pickRandomPrizes(WheelOfFortuneComponent.PRIZE_COUNT)) {
      sectors.push({ kind: 'prize', prize, color: '' });
    }

    for (const action of WheelOfFortuneComponent.ACTIONS) {
      sectors.push({ kind: 'action', action, color: '' });
    }

    this.shuffleArray(sectors);
    this.sectors = sectors.map((sector, index) => ({
      ...sector,
      color: WheelOfFortuneComponent.SECTOR_COLORS[
        index % WheelOfFortuneComponent.SECTOR_COLORS.length
      ]
    }));

    this.rotation = 0;
    this.isSpinning = false;
    this.showResult = false;
    this.resultSector = null;
    this.pendingResultIndex = null;
    this.pointerFlick = false;
  }

  get sectorAngle(): number {
    return this.sectors.length > 0 ? 360 / this.sectors.length : 360;
  }

  get conicGradient(): string {
    if (this.sectors.length === 0) {
      return '#ccc';
    }

    if (this.sectors.length === 1) {
      return this.sectors[0].color;
    }

    const stops = this.sectors
      .map((sector, index) => {
        const start = index * this.sectorAngle;
        const end = (index + 1) * this.sectorAngle;
        return `${sector.color} ${start}deg ${end}deg`;
      })
      .join(', ');

    return `conic-gradient(from -90deg, ${stops})`;
  }

  get canSpin(): boolean {
    return !this.noFlashcards && !this.isSpinning && !this.showResult && this.sectors.length > 0;
  }

  getResultLabel(sector: WheelSector): string {
    if (sector.kind === 'flashcard') return sector.flashcard?.caption ?? '';
    if (sector.kind === 'prize') return sector.prize?.caption ?? '';
    return sector.action?.label ?? '';
  }

  /** Mid-angle of sector i in degrees (0 = top, clockwise). */
  getSectorMidAngle(index: number): number {
    return index * this.sectorAngle + this.sectorAngle / 2;
  }

  getHighlightPatterns(flashcardId: string): string[] | undefined {
    return this.flashcardService.getHighlightPatternsForFlashcard(flashcardId, this.selectedSets);
  }

  spin(): void {
    if (!this.canSpin) return;

    const index = Math.floor(Math.random() * this.sectors.length);
    this.pendingResultIndex = index;

    const sectorCenter = index * this.sectorAngle + this.sectorAngle / 2;
    const desiredMod = (360 - sectorCenter) % 360;
    const currentMod = ((this.rotation % 360) + 360) % 360;
    let delta = (desiredMod - currentMod + 360) % 360;
    if (delta < 20) {
      delta += 360;
    }

    const fullTurns =
      WheelOfFortuneComponent.MIN_FULL_TURNS +
      Math.floor(Math.random() * (WheelOfFortuneComponent.MAX_EXTRA_TURNS + 1));

    this.isSpinning = true;
    this.rotation = this.rotation + fullTurns * 360 + delta;
    this.startPointerFlicks(WheelOfFortuneComponent.SPIN_DURATION_MS);

    this.clearSpinTimeout();
    this.spinTimeout = setTimeout(() => {
      this.finishSpin();
    }, WheelOfFortuneComponent.SPIN_DURATION_MS + 100);
  }

  onSpinTransitionEnd(event: TransitionEvent): void {
    if (event.propertyName !== 'transform' || !this.isSpinning) return;
    this.finishSpin();
  }

  dismissResult(): void {
    if (!this.showResult) return;
    this.showResult = false;
    this.resultSector = null;
  }

  goBack(): void {
    if (this.gameId) {
      this.router.navigate(['/sets', this.gameId, 'select']);
    } else {
      this.router.navigate(['/']);
    }
  }

  private pickRandomPrizes(count: number): Prize[] {
    const prizes = this.prizeService.getAllPrizes();
    this.shuffleArray(prizes);
    return prizes.slice(0, Math.min(count, prizes.length));
  }

  private shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  private finishSpin(): void {
    if (!this.isSpinning) return;

    this.clearSpinTimeout();
    this.clearPointerTimers();
    this.pointerFlick = false;
    this.isSpinning = false;

    if (this.pendingResultIndex == null) return;

    this.resultSector = this.sectors[this.pendingResultIndex];
    this.pendingResultIndex = null;
    this.showResult = true;
  }

  private startPointerFlicks(durationMs: number): void {
    this.clearPointerTimers();

    let elapsed = 0;
    let interval = Math.max(50, Math.min(120, this.sectorAngle * 2));

    const scheduleNext = (): void => {
      if (elapsed >= durationMs - 150) return;

      this.triggerPointerFlick();
      elapsed += interval;
      interval = Math.min(interval * 1.18, 380);

      this.pointerTimeout = setTimeout(scheduleNext, interval);
    };

    scheduleNext();
  }

  private triggerPointerFlick(): void {
    this.pointerFlick = false;
    this.pointerResetTimeout = setTimeout(() => {
      this.pointerFlick = true;
    }, 20);
  }

  private clearSpinTimeout(): void {
    if (this.spinTimeout != null) {
      clearTimeout(this.spinTimeout);
      this.spinTimeout = null;
    }
  }

  private clearPointerTimers(): void {
    if (this.pointerTimeout != null) {
      clearTimeout(this.pointerTimeout);
      this.pointerTimeout = null;
    }
    if (this.pointerResetTimeout != null) {
      clearTimeout(this.pointerResetTimeout);
      this.pointerResetTimeout = null;
    }
  }
}
