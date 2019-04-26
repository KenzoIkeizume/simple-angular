import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {
  title: string = "Example Angular";
  data: DialogData = {
    name: ''
  };

  @Output() messageEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.data.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.messageEvent.emit(result);
    });
  }
}
