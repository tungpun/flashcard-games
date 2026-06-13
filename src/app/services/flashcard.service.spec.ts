import { TestBed } from '@angular/core/testing';

import { FlashcardService } from './flashcard.service';

describe('FlashcardService', () => {
  let service: FlashcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return flashcard captions in uppercase', () => {
    const flashcards = service.getAllFlashcards();
    expect(flashcards.length).toBeGreaterThan(0);
    flashcards.forEach(flashcard => {
      expect(flashcard.caption).toBe(flashcard.caption.toUpperCase());
    });
  });
});
