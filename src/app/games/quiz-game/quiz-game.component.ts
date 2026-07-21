import { Component, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { SpeechService } from '../../services/speech.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';
import { HighlightedCaptionComponent } from '../../components/highlighted-caption/highlighted-caption.component';

interface QuizOption {
  caption: string;
  isCorrect: boolean;
  flashcardId: string;
}

interface QuizQuestion {
  flashcard: Flashcard;
  options: QuizOption[];
}

@Component({
  selector: 'fg-quiz-game',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent, HighlightedCaptionComponent],
  templateUrl: './quiz-game.component.html',
  styleUrl: './quiz-game.component.scss'
})
export class QuizGameComponent implements OnInit {
  selectedSets: FlashcardSet[] = [];
  questions: QuizQuestion[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswer: string | null = null;
  showResult: boolean = false;
  isCorrect: boolean = false;
  quizComplete: boolean = false;
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

    // Get gameId from route URL (e.g., '/games/quiz' -> 'quiz')
    const urlSegments = this.route.snapshot.url;
    this.gameId = urlSegments.length > 1 ? urlSegments[1].path : '';

    // Get all sets and filter to selected ones
    const allSets = this.flashcardService.getAllSets();
    this.selectedSets = allSets.filter(s => setIds.includes(s.id));

    if (this.selectedSets.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    this.initializeQuiz();
  }

  initializeQuiz(): void {
    if (this.selectedSets.length === 0) return;

    // Get flashcards from all selected sets
    const setIds = this.selectedSets.map(s => s.id);
    const flashcards = this.flashcardService.getFlashcardsBySetIds(setIds);
    this.allFlashcards = this.flashcardService.getAllFlashcards();

    // Shuffle flashcards for random question order
    this.shuffleArray(flashcards);

    this.questions = flashcards.map(flashcard => {
      // Create 4 options: 1 correct + 3 incorrect
      const options: QuizOption[] = [
        { caption: flashcard.caption, isCorrect: true, flashcardId: flashcard.id }
      ];

      const incorrectFlashcards = this.allFlashcards.filter(f => f.id !== flashcard.id);
      this.shuffleArray(incorrectFlashcards);

      for (let i = 0; i < 3 && i < incorrectFlashcards.length; i++) {
        options.push({
          caption: incorrectFlashcards[i].caption,
          isCorrect: false,
          flashcardId: incorrectFlashcards[i].id
        });
      }

      // Shuffle the options so correct answer isn't always first
      this.shuffleArray(options);

      return {
        flashcard,
        options
      };
    });

    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizComplete = false;
    this.showResult = false;
    this.speakCurrentQuestion();
  }

  private speakCurrentQuestion(): void {
    const question = this.getCurrentQuestion();
    if (question) {
      this.speechService.speak(question.flashcard.caption);
    }
  }

  shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectAnswer(option: QuizOption): void {
    if (this.showResult) return; // Prevent clicking after answer is revealed

    this.selectedAnswer = option.caption;
    this.isCorrect = option.isCorrect;
    this.showResult = true;

    if (option.isCorrect) {
      this.score++;
    }
  }

  nextQuestion(): void {
    this.selectedAnswer = null;
    this.showResult = false;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizComplete = true;
    } else {
      this.speakCurrentQuestion();
    }
  }

  restartQuiz(): void {
    this.initializeQuiz();
  }

  getCurrentQuestion(): QuizQuestion | null {
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

  getHighlightPatterns(flashcardId: string): string[] | undefined {
    return this.flashcardService.getHighlightPatternsForFlashcard(flashcardId, this.selectedSets);
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
