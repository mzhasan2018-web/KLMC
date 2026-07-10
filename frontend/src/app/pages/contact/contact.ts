import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  submitting = false;
  successMessage = '';
  errorMessage = '';
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.apiService.submitContact(this.contactForm.getRawValue()).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.submitting = false;
        this.contactForm.reset();
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || 'Something went wrong. Please try again.';
        this.submitting = false;
      }
    });
  }
}