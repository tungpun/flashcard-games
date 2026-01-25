# Create Flashcards and Sets from Description or Image

Create or extend flashcards and flashcard sets in the app using either a **text description** or a **reference image** (e.g. lesson plan, curriculum table, vocabulary list). Add only missing items; reuse existing flashcards when they match.

## Objective

1. **From description:** Parse the user's message for explicit vocabulary words, set names, and groupings. Infer sets when terms are clearly categorized (e.g. "Letter Dd – beginning: duck, dig, dad").
2. **From image:** Analyze any attached image (screenshot, photo, document) that shows lesson plans, tables, or word lists. Extract:
   - Set names or categories (e.g. "Musical instruments", "Letter Gg", "Consonant pattern: C")
   - Individual vocabulary words or phrases to use as flashcard captions
   - Which words belong to which set
3. **Implement:** Add new flashcards and/or sets to `src/app/services/flashcard.service.ts`, and optionally add styles for new sets in `src/app/components/flashcard-set-selector/flashcard-set-selector.component.scss` if you introduce new set IDs.

## Requirements

### Flashcard format
- Each flashcard has: `id`, `caption`, `imageUrl`.
- Use **sequential numeric string IDs** (e.g. `'177'`, `'178'`). Check the `flashcards` array for the current max ID and use the next available.
- **Caption:** Use the exact word or short phrase from the description/image (e.g. "Guitar", "Handbell").
- **Image URL:** Fill `imageUrl` with the single-quoted string `'PLACEHOLDER_IMAGE_URL'` for every new flashcard (the project constant is `PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/512x512?text=Flashcard'`).

### Flashcard set format
- Each set has: `id`, `name`, `description`, `flashcardIds`.
- Use **sequential set IDs** (e.g. `set26`, `set27`). Check `flashcardSets` for the current max and use the next available. **Do not** reuse IDs.
- **name:** Clear, user-friendly title (e.g. "Letter Dd", "Musical Instruments", "Consonant pattern: C").
- **description:** Brief summary of the set’s content or learning focus.
- **flashcardIds:** Array of flashcard IDs in this set. Use **existing** flashcard IDs when the word already exists in the service; only create new flashcards for words that are missing.

### Service rules (see `.cursorrules`)
- Append new flashcards to the `flashcards` array.
- Insert new sets **before** the "All" set (the one with `id: 'set5'`). The "All" set must remain last.
- The "All" set uses `flashcardIds: this.flashcards.map(flashcard => flashcard.id)`, so it automatically includes all flashcards—no need to edit it when adding cards.

### Duplicates and reuse
- **Never duplicate flashcards.** Before adding a card, search the `flashcards` array for the same `caption` (case-insensitive). If it exists, use its `id` in the relevant set(s) instead of creating a new card.
- When a set from the description/image matches an **existing** set (by name or purpose), add new flashcard IDs to that set’s `flashcardIds` rather than creating a duplicate set.

### Styles for new sets
- If you add **new** set IDs (e.g. `set26`, `set27`), add matching rules in `flashcard-set-selector.component.scss`:
  - Class: `.set-set26`, `.set-set27`, etc.
  - Use a `linear-gradient(135deg, #color1 0%, #color2 100%)` background, following the pattern of existing `.set-set1` … `.set-set25` (and beyond). Keep each new set’s gradient distinct.

## Output

1. **Edits to `flashcard.service.ts`:**
   - New flashcards appended to `flashcards`.
   - New sets inserted before the "All" set, or existing sets updated with new `flashcardIds`.
2. **Edits to `flashcard-set-selector.component.scss`:**  
   - New `.set-setX` rules only when you introduce new set IDs.
3. **Brief summary:**  
   - List of new flashcards (caption + id).  
   - List of new or updated sets (name, id, count of cards).  
   - Note any reused existing flashcards.

## Usage

- **Text only:** Provide a description in the chat, e.g.  
  *"Add a set 'Colors' with: red, blue, green, yellow. And a set 'Shapes': circle, square, triangle."*
- **With image:** Attach a screenshot or photo of a lesson plan, table, or vocabulary list and say what to add (or "add all flashcards/sets from this image").  
- You can combine both: e.g. attach an image and add *"Also add a set 'Extra vocab' with: run, jump, sit."*

Run this command whenever you want to create or extend flashcards and sets from a description or an image.
