import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsBookings } from './clinics-bookings';

describe('ClinicsBookings', () => {
  let component: ClinicsBookings;
  let fixture: ComponentFixture<ClinicsBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsBookings],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicsBookings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
