import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleSection } from './lifestyle-section';

describe('LifestyleSection', () => {
  let component: LifestyleSection;
  let fixture: ComponentFixture<LifestyleSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestyleSection],
    }).compileComponents();

    fixture = TestBed.createComponent(LifestyleSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
