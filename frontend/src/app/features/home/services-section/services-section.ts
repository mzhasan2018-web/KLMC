import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSectionComponent {}
