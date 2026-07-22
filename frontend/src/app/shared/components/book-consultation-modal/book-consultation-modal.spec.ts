import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultationModal } from './book-consultation-modal';

describe('BookConsultationModal', () => {
  let component: BookConsultationModal;
  let fixture: ComponentFixture<BookConsultationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookConsultationModal],
    }).compileComponents();

    fixture = TestBed.createComponent(BookConsultationModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
