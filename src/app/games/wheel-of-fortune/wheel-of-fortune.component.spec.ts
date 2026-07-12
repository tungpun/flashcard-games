import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { WheelOfFortuneComponent } from './wheel-of-fortune.component';

describe('WheelOfFortuneComponent', () => {
  let component: WheelOfFortuneComponent;
  let fixture: ComponentFixture<WheelOfFortuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelOfFortuneComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: { sets: 'set1' },
              url: [{ path: 'games' }, { path: 'wheel-of-fortune' }]
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelOfFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
