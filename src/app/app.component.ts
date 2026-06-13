import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fg-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showMainNav = false;

  constructor(private router: Router) {
    this.updateMainNavVisibility(this.router.url);

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.updateMainNavVisibility(event.urlAfterRedirects);
    });
  }

  private updateMainNavVisibility(url: string): void {
    const path = url.split('?')[0].split('#')[0];
    this.showMainNav =
      path === '' ||
      path === '/' ||
      /^\/sets\/[^/]+\/select$/.test(path);
  }
}
