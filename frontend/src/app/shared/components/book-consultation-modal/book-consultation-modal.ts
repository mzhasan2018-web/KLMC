import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../../core/services/booking';

@Component({
  selector: 'app-book-consultation-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-consultation-modal.html',
  styleUrl: './book-consultation-modal.scss'
})
export class BookConsultationModalComponent {
  submitting = false;
  submitted = false;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public bookingService: BookingService
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      preferredClinic: ['klmc-tralee', Validators.required],
      message: ['']
    });
  }

  close(): void {
    this.bookingService.close();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    // TODO: replace with a real BookingService/API call once the
    // backend booking endpoint exists (mirrors ContactController pattern).
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.form.reset({ preferredClinic: 'klmc-tralee' });
    }, 600);
  }
}