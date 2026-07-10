import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss'
})
export class CtaSectionComponent {}

