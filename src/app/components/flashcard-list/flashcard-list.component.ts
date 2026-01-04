import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlashcardService } from '../../services/flashcard.service';
import { Flashcard } from '../../models';

@Component({
  selector: 'fg-flashcard-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-list.component.html',
  styleUrl: './flashcard-list.component.scss'
})
export class FlashcardListComponent implements OnInit {
  flashcards: Flashcard[] = [];

  constructor(
    private flashcardService: FlashcardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flashcards = this.flashcardService.getAllFlashcards();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
