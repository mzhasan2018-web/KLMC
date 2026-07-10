import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCalculator } from './progress-calculator';

describe('ProgressCalculator', () => {
  let component: ProgressCalculator;
  let fixture: ComponentFixture<ProgressCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
