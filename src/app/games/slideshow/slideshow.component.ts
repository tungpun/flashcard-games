import { Component, HostListener, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';
import { HighlightedCaptionComponent } from '../../components/highlighted-caption/highlighted-caption.component';

@Component({
  selector: 'fg-slideshow',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent, HighlightedCaptionComponent],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit {
  selectedSets: FlashcardSet[] = [];
  flashcards: Flashcard[] = [];
  currentIndex: number = 0;
  gameComplete: boolean = false;
  noFlashcards: boolean = false;
  gameId: string = '';

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

  initializeGame(): void {
    if (this.selectedSets.length === 0) return;

    const setIds = this.selectedSets.map(s => s.id);
    this.flashcards = this.flashcardService.getFlashcardsBySetIds(setIds);
    this.noFlashcards = this.flashcards.length === 0;
    this.currentIndex = 0;
    this.gameComplete = false;
  }

  getCurrentFlashcard(): Flashcard | null {
    if (this.currentIndex < this.flashcards.length) {
      return this.flashcards[this.currentIndex];
    }
    return null;
  }

  get canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get canGoNext(): boolean {
    return !this.gameComplete && this.flashcards.length > 0;
  }

  goPrevious(): void {
    if (this.canGoPrevious) {
      this.currentIndex--;
    }
  }

  goNext(): void {
    if (!this.canGoNext) return;

    if (this.currentIndex >= this.flashcards.length - 1) {
      this.gameComplete = true;
    } else {
      this.currentIndex++;
    }
  }

  restartGame(): void {
    this.initializeGame();
  }

  getCompletionMessage(): string {
    return `You viewed all ${this.flashcards.length} flashcards!`;
  }

  getHighlightPatterns(flashcardId: string): string[] | undefined {
    return this.flashcardService.getHighlightPatternsForFlashcard(flashcardId, this.selectedSets);
  }

  goBack(): void {
    if (this.gameId) {
      this.router.navigate(['/sets', this.gameId, 'select']);
    } else {
      this.router.navigate(['/']);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (this.gameComplete) return;

    if (event.key === 'ArrowLeft') {
      this.goPrevious();
    } else if (event.key === 'ArrowRight') {
      this.goNext();
    }
  }
}
