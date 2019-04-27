import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscribes: string[] = [];
  currentpage: string = 'First';
  pagesBody: object = {
    First: [],
    Second: [],
    Third: []
  }

  receiveMessage($event: any) {
    this.pagesBody[this.currentpage] = [...this.pagesBody[this.currentpage], $event.name];
    this.subscribes = this.pagesBody[this.currentpage];
  }

  page($event: any) {
    this.currentpage = $event;
    this.subscribes = this.pagesBody[this.currentpage];
  }
}
