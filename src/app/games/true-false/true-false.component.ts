import { Component, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { SpeechService } from '../../services/speech.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';

interface TrueFalseQuestion {
  flashcard: Flashcard;
  statement: string;
  isCorrect: boolean; // true if statement is correct, false if incorrect
}

@Component({
  selector: 'fg-true-false',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent],
  templateUrl: './true-false.component.html',
  styleUrl: './true-false.component.scss'
})
export class TrueFalseComponent implements OnInit {
  selectedSets: FlashcardSet[] = [];
  questions: TrueFalseQuestion[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswer: boolean | null = null;
  gameComplete: boolean = false;
  showResult: boolean = false;
  isCorrect: boolean = false;
  allFlashcards: Flashcard[] = [];
  gameId: string = '';

  constructor(
    private flashcardService: FlashcardService,
    private speechService: SpeechService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get sets from query params
    const setsParam = this.route.snapshot.queryParams['sets'];
    if (!setsParam) {
      this.router.navigate(['/']);
      return;
    }

    // Parse comma-separated set IDs
    const setIds = setsParam.split(',').filter((id: string) => id.trim() !== '');
    if (setIds.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    // Get gameId from route URL (e.g., '/games/true-false' -> 'true-false')
    const urlSegments = this.route.snapshot.url;
    this.gameId = urlSegments.length > 1 ? urlSegments[1].path : '';

    // Get all sets and filter to selected ones
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

    // Get flashcards from all selected sets
    const setIds = this.selectedSets.map(s => s.id);
    const flashcards = this.flashcardService.getFlashcardsBySetIds(setIds);
    this.allFlashcards = this.flashcardService.getAllFlashcards();

    // Shuffle flashcards for random order
    this.shuffleArray(flashcards);

    this.questions = flashcards.map(flashcard => {
      // Generate a statement - either correct or incorrect
      const isCorrect = Math.random() > 0.5;
      let statement: string;

      if (isCorrect) {
        // Correct statement - use the actual caption
        statement = `This is a ${flashcard.caption}.`;
      } else {
        // Incorrect statement - use a different word from the set
        const otherFlashcards = this.allFlashcards.filter(f => f.id !== flashcard.id);
        if (otherFlashcards.length > 0) {
          const randomOther = otherFlashcards[Math.floor(Math.random() * otherFlashcards.length)];
          statement = `This is a ${randomOther.caption}.`;
        } else {
          // Fallback if no other flashcards
          statement = `This is not a ${flashcard.caption}.`;
        }
      }

      return {
        flashcard,
        statement,
        isCorrect
      };
    });

    this.currentQuestionIndex = 0;
    this.score = 0;
    this.gameComplete = false;
    this.resetCurrentQuestion();
    this.speakCurrentQuestion();
  }

  private speakCurrentQuestion(): void {
    const question = this.getCurrentQuestion();
    if (question) {
      this.speechService.speak(question.flashcard.caption);
    }
  }

  resetCurrentQuestion(): void {
    this.selectedAnswer = null;
    this.showResult = false;
    this.isCorrect = false;
  }

  shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectAnswer(answer: boolean): void {
    if (this.showResult) return;

    this.selectedAnswer = answer;
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.isCorrect = answer === currentQuestion.isCorrect;
    this.showResult = true;

    if (this.isCorrect) {
      this.score++;
    }
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.gameComplete = true;
    } else {
      this.resetCurrentQuestion();
      this.speakCurrentQuestion();
    }
  }

  restartGame(): void {
    this.initializeGame();
  }

  getCurrentQuestion(): TrueFalseQuestion | null {
    if (this.currentQuestionIndex < this.questions.length) {
      return this.questions[this.currentQuestionIndex];
    }
    return null;
  }

  getScorePercentage(): number {
    if (this.questions.length === 0) return 0;
    return Math.round((this.score / this.questions.length) * 100);
  }

  getCompletionMessage(): string {
    const percentage = this.getScorePercentage();
    let message = `Your Score: ${this.score}/${this.questions.length} (${percentage}%)\n\n`;

    if (percentage === 100) {
      message += 'Perfect! 🌟';
    } else if (percentage >= 80) {
      message += 'Great job! 👍';
    } else if (percentage >= 60) {
      message += 'Good try! 💪';
    } else {
      message += 'Keep practicing! 📚';
    }

    return message;
  }

  goBack(): void {
    // Navigate back to flashcard set selector for the current game
    if (this.gameId) {
      this.router.navigate(['/sets', this.gameId, 'select']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
