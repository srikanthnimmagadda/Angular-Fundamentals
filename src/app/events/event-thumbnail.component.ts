import { IEvent } from './../model/ievent';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() eventChild: IEvent;
  constructor() {}

  ngOnInit() {}

  getStartTimeClass() {
    const isEarlyStart = this.eventChild && this.eventChild.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
