import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicCard } from './clinic-card';

describe('ClinicCard', () => {
  let component: ClinicCard;
  let fixture: ComponentFixture<ClinicCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
