import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { SpeechService } from '../../services/speech.service';
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
  currentFlashcard: Flashcard | null = null;
  gameComplete: boolean = false;
  noFlashcards: boolean = false;
  gameId: string = '';

  constructor(
    private flashcardService: FlashcardService,
    private speechService: SpeechService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
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
    this.syncCurrentFlashcard();
    this.refreshView();
  }

  private syncCurrentFlashcard(): void {
    this.currentFlashcard =
      this.currentIndex < this.flashcards.length ? this.flashcards[this.currentIndex] : null;
    if (this.currentFlashcard) {
      this.speechService.speak(this.currentFlashcard.caption);
    }
  }

  /** Extra CD passes help embedded TV browsers repaint <img> after src changes. */
  private refreshView(): void {
    this.cdr.markForCheck();
    this.cdr.detectChanges();
    requestAnimationFrame(() => {
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
  }

  get canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get canGoNext(): boolean {
    return !this.gameComplete && this.flashcards.length > 0;
  }

  goPrevious(): void {
    if (!this.canGoPrevious) return;

    this.currentIndex--;
    this.syncCurrentFlashcard();
    this.refreshView();
  }

  goNext(): void {
    if (!this.canGoNext) return;

    if (this.currentIndex >= this.flashcards.length - 1) {
      this.gameComplete = true;
      this.currentFlashcard = null;
    } else {
      this.currentIndex++;
      this.syncCurrentFlashcard();
    }
    this.refreshView();
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
