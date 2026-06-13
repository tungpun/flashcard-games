import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { BucketSortingComponent } from './bucket-sorting.component';

describe('BucketSortingComponent', () => {
  let component: BucketSortingComponent;
  let fixture: ComponentFixture<BucketSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketSortingComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: { sets: 'set1,set2' },
              url: [{ path: 'games' }, { path: 'bucket-sorting' }]
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BucketSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
