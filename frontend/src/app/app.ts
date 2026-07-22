import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './core/components/topbar/topbar';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';
import { BookConsultationModalComponent } from './shared/components/book-consultation-modal/book-consultation-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    HeaderComponent,
    FooterComponent,
    BookConsultationModalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}