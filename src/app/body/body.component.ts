import { Component, OnInit, Input } from '@angular/core';
import { EMAILS } from '../mock-body';
import { EmailService } from '../email.service';
import { Email } from '../email';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  @Input() subscribes: Email[];

  constructor(private emailService: EmailService) {

  }

  getEmails(): void {
    this.emailService.getEmails().subscribe(emails => this.subscribes = emails);
  }

  ngOnInit() {
    this.getEmails();
  }
}
