import { Component } from '@angular/core';
import { Email } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscribes: string[] = [];
  currentpage: string = 'FIRST';
  pagesBody: object = {
    FIRST: [],
    SECOND: [],
    THIRD: []
  }

  receiveMessage($event: any) {
    this.pagesBody[this.currentpage] = [...this.pagesBody[this.currentpage], new Email(new Date().getUTCMilliseconds(), $event.name)];
    this.subscribes = this.pagesBody[this.currentpage];
  }

  page($event: any) {
    this.currentpage = $event;
    this.subscribes = this.pagesBody[this.currentpage];
  }
}
