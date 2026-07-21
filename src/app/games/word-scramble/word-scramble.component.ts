import { Component, OnInit } from '@angular/core';
import { FlashcardSet, Flashcard } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { SpeechService } from '../../services/speech.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCompletionComponent } from '../../components/game-completion/game-completion.component';
import { HighlightedCaptionComponent } from '../../components/highlighted-caption/highlighted-caption.component';

interface ScrambleQuestion {
  flashcard: Flashcard;
  scrambledLetters: string[];
  correctAnswer: string;
}

@Component({
  selector: 'fg-word-scramble',
  standalone: true,
  imports: [CommonModule, GameCompletionComponent, HighlightedCaptionComponent],
  templateUrl: './word-scramble.component.html',
  styleUrl: './word-scramble.component.scss'
})
export class WordScrambleComponent implements OnInit {
  selectedSets: FlashcardSet[] = [];
  questions: ScrambleQuestion[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  userAnswer: string[] = [];
  availableLetters: string[] = [];
  gameComplete: boolean = false;
  showResult: boolean = false;
  isCorrect: boolean = false;
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

    // Get gameId from route URL (e.g., '/games/word-scramble' -> 'word-scramble')
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

    // Shuffle flashcards for random order
    this.shuffleArray(flashcards);

    this.questions = flashcards.map(flashcard => {
      const word = flashcard.caption.toUpperCase();
      const letters = word.split('');
      const scrambled = [...letters];
      this.shuffleArray(scrambled);

      return {
        flashcard,
        scrambledLetters: scrambled,
        correctAnswer: word
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
    if (this.currentQuestionIndex < this.questions.length) {
      const question = this.questions[this.currentQuestionIndex];
      this.availableLetters = [...question.scrambledLetters];
      this.userAnswer = [];
      this.showResult = false;
      this.isCorrect = false;
    }
  }

  shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectLetter(letter: string, index: number): void {
    if (this.showResult) return;

    // Move letter from available to user answer
    this.availableLetters.splice(index, 1);
    this.userAnswer.push(letter);
  }

  removeLetter(letter: string, index: number): void {
    if (this.showResult) return;

    // Move letter back from user answer to available
    this.userAnswer.splice(index, 1);
    this.availableLetters.push(letter);
  }

  checkAnswer(): void {
    if (this.showResult) return;

    const currentQuestion = this.questions[this.currentQuestionIndex];
    const userWord = this.userAnswer.join('');

    this.isCorrect = userWord === currentQuestion.correctAnswer;
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

  getCurrentQuestion(): ScrambleQuestion | null {
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

  canCheckAnswer(): boolean {
    return this.userAnswer.length === this.questions[this.currentQuestionIndex]?.correctAnswer.length;
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

