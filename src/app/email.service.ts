import { Injectable } from '@angular/core';
import { EMAILS } from './mock-body';
import { Observable, of } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getEmails(): Observable<Email[]> {
    return of(EMAILS);
  }
}
