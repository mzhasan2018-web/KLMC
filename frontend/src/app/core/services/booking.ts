import { Injectable, signal } from '@angular/core';

export interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  preferredClinic: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly _isOpen = signal(false);
  readonly isOpen = this._isOpen.asReadonly();

  open(): void {
    this._isOpen.set(true);
  }

  close(): void {
    this._isOpen.set(false);
  }
}