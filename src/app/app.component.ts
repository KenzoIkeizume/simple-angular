import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscribes: string[] = [];

  receiveMessage($event) {
    console.log('$event', $event);
    this.subscribes = [...this.subscribes, $event.name];
  }
}
