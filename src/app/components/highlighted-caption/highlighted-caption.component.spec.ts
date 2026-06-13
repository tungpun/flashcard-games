import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightedCaptionComponent } from './highlighted-caption.component';

describe('HighlightedCaptionComponent', () => {
  let component: HighlightedCaptionComponent;
  let fixture: ComponentFixture<HighlightedCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedCaptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightedCaptionComponent);
    component = fixture.componentInstance;
    component.caption = 'TRUCK';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render plain caption when no patterns are provided', () => {
    expect(fixture.nativeElement.textContent.trim()).toBe('TRUCK');
    expect(fixture.nativeElement.querySelector('.caption-highlight')).toBeNull();
  });

  it('should render highlighted segments when patterns match', () => {
    component.patterns = ['CK'];
    fixture.detectChanges();

    const highlight = fixture.nativeElement.querySelector('.caption-highlight');
    expect(highlight.textContent).toBe('CK');
    expect(fixture.nativeElement.textContent).toBe('TRUCK');
  });
});
