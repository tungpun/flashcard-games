import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamePlayHistoryService {
  private readonly storageKey = 'fg-game-last-played';

  recordGameClick(gameId: string): void {
    const history = this.load();
    history[gameId] = Date.now();
    this.save(history);
  }

  getAll(): Record<string, number> {
    return this.load();
  }

  private load(): Record<string, number> {
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      if (!raw) {
        return {};
      }
      const parsed: unknown = JSON.parse(raw);
      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        return {};
      }
      return parsed as Record<string, number>;
    } catch {
      return {};
    }
  }

  private save(data: Record<string, number>): void {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch {
      // Ignore quota errors and private browsing restrictions.
    }
  }
}
