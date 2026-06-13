import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlashcardService } from '../../services/flashcard.service';
import { Flashcard, FlashcardSet } from '../../models';
import { HighlightedCaptionComponent } from '../highlighted-caption/highlighted-caption.component';

interface FlashcardSetGroup {
  set: FlashcardSet;
  flashcards: Flashcard[];
}

@Component({
  selector: 'fg-flashcard-list',
  standalone: true,
  imports: [CommonModule, HighlightedCaptionComponent],
  templateUrl: './flashcard-list.component.html',
  styleUrl: './flashcard-list.component.scss'
})
export class FlashcardListComponent implements OnInit {
  flashcardSetGroups: FlashcardSetGroup[] = [];

  constructor(
    private flashcardService: FlashcardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flashcardSetGroups = this.flashcardService
      .getAllSets()
      .filter(set => set.id !== 'set5')
      .map(set => ({
        set,
        flashcards: this.flashcardService.getFlashcardsBySetId(set.id)
      }))
      .filter(group => group.flashcards.length > 0);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
