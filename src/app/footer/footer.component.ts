import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Output() clickPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickTab($event) {
    this.clickPage.emit($event.target.textContent);
  }
}
