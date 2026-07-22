import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredibilityStrip } from './credibility-strip';

describe('CredibilityStrip', () => {
  let component: CredibilityStrip;
  let fixture: ComponentFixture<CredibilityStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredibilityStrip],
    }).compileComponents();

    fixture = TestBed.createComponent(CredibilityStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
