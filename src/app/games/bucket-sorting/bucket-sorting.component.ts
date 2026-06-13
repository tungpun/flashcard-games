import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';
import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

interface SortableCard {
  flashcard: Flashcard;
  correctSetId: string;
  shake?: boolean;
}

@Component({
  selector: 'fg-bucket-sorting',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent, DragDropModule],
  templateUrl: './bucket-sorting.component.html',
  styleUrl: './bucket-sorting.component.scss'
})
export class BucketSortingComponent implements OnInit {
  selectedSets: FlashcardSet[] = [];
  pool: SortableCard[] = [];
  buckets: Record<string, SortableCard[]> = {};
  totalCards: number = 0;
  mistakes: number = 0;
  gameComplete: boolean = false;
  noEligibleCards: boolean = false;
  gameId: string = '';

  @ViewChildren(CdkDropList) dropLists!: QueryList<CdkDropList<SortableCard[]>>;

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

  get connectedLists(): CdkDropList<SortableCard[]>[] {
    return this.dropLists ? this.dropLists.toArray() : [];
  }

  get sortedCount(): number {
    return this.totalCards - this.pool.length;
  }

  initializeGame(): void {
    if (this.selectedSets.length === 0) return;

    const setIds = this.selectedSets.map(s => s.id);
    const allCards = this.flashcardService.getFlashcardsBySetIds(setIds);

    const eligibleCards = allCards
      .map(flashcard => {
        const matchingSets = setIds.filter(id => {
          const set = this.selectedSets.find(s => s.id === id);
          return set?.flashcardIds.includes(flashcard.id);
        });
        return { flashcard, matchingSets };
      })
      .filter(({ matchingSets }) => matchingSets.length === 1)
      .map(({ flashcard, matchingSets }) => ({
        flashcard,
        correctSetId: matchingSets[0]
      }));

    this.noEligibleCards = eligibleCards.length === 0;
    this.pool = [...eligibleCards];
    this.shuffleArray(this.pool);
    this.buckets = Object.fromEntries(setIds.map(id => [id, []]));
    this.totalCards = eligibleCards.length;
    this.mistakes = 0;
    this.gameComplete = false;
  }

  shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onDrop(event: CdkDragDrop<SortableCard[]>, targetSetId: string | null): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    const card = event.previousContainer.data[event.previousIndex];

    if (targetSetId === null) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      return;
    }

    if (card.correctSetId === targetSetId) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.checkComplete();
      return;
    }

    this.mistakes++;
    card.shake = true;
    setTimeout(() => {
      card.shake = false;
    }, 500);
  }

  checkComplete(): void {
    if (this.pool.length === 0 && this.totalCards > 0) {
      this.gameComplete = true;
    }
  }

  getBucketCards(setId: string): SortableCard[] {
    return this.buckets[setId] ?? [];
  }

  getScore(): number {
    return this.totalCards - this.mistakes;
  }

  getScorePercentage(): number {
    if (this.totalCards === 0) return 0;
    return Math.round((this.getScore() / this.totalCards) * 100);
  }

  getCompletionMessage(): string {
    const score = this.getScore();
    const percentage = this.getScorePercentage();
    let message = `Your Score: ${score}/${this.totalCards} (${percentage}%)\n`;
    message += `Mistakes: ${this.mistakes}\n\n`;

    if (percentage === 100) {
      message += 'Perfect sorting! 🌟';
    } else if (percentage >= 80) {
      message += 'Great job! 👍';
    } else if (percentage >= 60) {
      message += 'Good try! 💪';
    } else {
      message += 'Keep practicing! 📚';
    }

    return message;
  }

  restartGame(): void {
    this.initializeGame();
  }

  goBack(): void {
    if (this.gameId) {
      this.router.navigate(['/sets', this.gameId, 'select']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
