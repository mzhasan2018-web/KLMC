import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

export interface ContactRequest {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  data: ContactRequest;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private healthUrl = 'http://localhost:5003/api/health';
  private contactUrl = 'http://localhost:5003/api/contact';

  constructor(private http: HttpClient) {}

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(this.healthUrl);
  }

  submitContact(payload: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.contactUrl, payload);
  }
}