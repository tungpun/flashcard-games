import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsMissingComponent } from './whats-missing.component';

describe('WhatsMissingComponent', () => {
  let component: WhatsMissingComponent;
  let fixture: ComponentFixture<WhatsMissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsMissingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
