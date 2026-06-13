import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptionSegment, splitCaptionIntoSegments } from '../../utils/caption-highlight.util';

@Component({
  selector: 'fg-highlighted-caption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlighted-caption.component.html',
  styleUrl: './highlighted-caption.component.scss'
})
export class HighlightedCaptionComponent {
  @Input({ required: true }) caption!: string;
  @Input() patterns?: string[];

  get segments(): CaptionSegment[] {
    return splitCaptionIntoSegments(this.caption, this.patterns);
  }

  get hasHighlights(): boolean {
    return this.segments.some(segment => segment.highlight);
  }
}
