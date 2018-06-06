import { IEvent } from './../model/ievent';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: IEvent;
  constructor(private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
  }

  handleCancel() {
    this.handleRedirect();
  }

  saveEvent(formValues) {
   this._eventService.saveEvent(formValues);
   this.handleRedirect();
  }

  handleRedirect() {
    this._router.navigate(['/events']);
  }
}
