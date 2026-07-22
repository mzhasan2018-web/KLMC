import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClinicCardComponent, Clinic } from '../../features/clinics-bookings/clinic-card/clinic-card';

@Component({
  selector: 'app-clinics-bookings',
  standalone: true,
  imports: [RouterLink, ClinicCardComponent],
  templateUrl: './clinics-bookings.html',
  styleUrl: './clinics-bookings.scss'
})
export class ClinicsBookingsComponent {
  readonly clinics: Clinic[] = [
    {
      name: 'Dr Uzair Shabbir Lifestyle & Metabolic Health Clinic',
      formerlyKnownAs: 'Kerry Lifestyle Medicine Clinic (KLMC)',
      location: 'Tralee, Co. Kerry & online consultations',
      whoItsFor:
        'Adults dealing with weight, metabolic health, perimenopause/menopause, PMOS or hormone-related concerns',
      appointmentType: 'GP-led consultation, in-person or online, with structured follow-up',
      bookingUrl: 'https://partner.pabau.com/online-bookings/MEDORADEA-LIMITED',
      contact: 'info@klmc.ie',
      fees: 'Fees available on booking'
    },
    {
      name: 'Ivy Clinic',
      location: 'Listowel, Co. Kerry',
      whoItsFor: 'Patients in North Kerry seeking weight and metabolic health support closer to home',
      appointmentType: 'Monthly outreach clinic',
      bookingUrl: 'https://partner.pabau.com/online-bookings/MEDORADEA-LIMITED',
      contact: 'info@klmc.ie',
      fees: 'Fees available on booking'
    }
  ];
}