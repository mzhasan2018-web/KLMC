import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Clinic {
  name: string;
  formerlyKnownAs?: string;
  location: string;
  whoItsFor: string;
  appointmentType: string;
  bookingUrl?: string;
  contact?: string;
  fees: string;
}

@Component({
  selector: 'app-clinic-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clinic-card.html',
  styleUrl: './clinic-card.scss'
})
export class ClinicCardComponent {
  @Input({ required: true }) clinic!: Clinic;
}