import { Component, OnInit } from '@angular/core';
import { EMAILS } from '../mock-body';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  emails: string[] = EMAILS;

  constructor() { }

  ngOnInit() {
  }

}
