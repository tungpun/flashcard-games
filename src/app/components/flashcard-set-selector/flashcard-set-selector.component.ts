import { Component, OnInit } from '@angular/core';
import { FlashcardSet } from '../../models';
import { FlashcardService } from '../../services/flashcard.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fg-flashcard-set-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-set-selector.component.html',
  styleUrl: './flashcard-set-selector.component.scss'
})
export class FlashcardSetSelectorComponent implements OnInit {
  sets: FlashcardSet[] = [];
  gameId: string = '';
  selectedSetIds: string[] = [];

  constructor(
    private flashcardService: FlashcardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sets = this.flashcardService.getAllSets();
    // Get gameId from route params
    this.gameId = this.route.snapshot.params['gameId'] || '';
    
    if (!this.gameId) {
      // Invalid gameId, redirect to home
      this.router.navigate(['/']);
    }
  }

  toggleSet(setId: string): void {
    const index = this.selectedSetIds.indexOf(setId);
    if (index > -1) {
      // Deselect
      this.selectedSetIds.splice(index, 1);
    } else {
      // Select
      this.selectedSetIds.push(setId);
    }
  }

  isSetSelected(setId: string): boolean {
    return this.selectedSetIds.includes(setId);
  }

  startGame(): void {
    // Validate that at least one set is selected
    if (this.selectedSetIds.length === 0 || !this.gameId) {
      return;
    }

    // Navigate to game with selected sets as query parameters
    const setsParam = this.selectedSetIds.join(',');
    this.router.navigate(['/games', this.gameId], {
      queryParams: { sets: setsParam }
    });
  }

  goBack(): void {
    // Navigate back to game selector (home)
    this.router.navigate(['/']);
  }
}
