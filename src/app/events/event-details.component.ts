import { ISession } from './../model/isession';
import { IEvent } from './../model/ievent';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'name';

  constructor(private _eventService: EventService, private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.params.forEach((params: Params) => {
      this.event = this._eventService.getEvent(+params['id']);
    });
    this.addMode = false;
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
