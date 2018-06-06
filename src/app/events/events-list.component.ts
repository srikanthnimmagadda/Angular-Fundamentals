import { ActivatedRoute } from '@angular/router';
import { IEvent } from './../model/ievent';
import { ToastrService } from './../common/toastr.service';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private _eventsService: EventService, private _toastrService: ToastrService, private _router: ActivatedRoute) {}

  ngOnInit() {
    this.events = this._router.snapshot.data['events'];
    this._eventsService.getEvents().subscribe(events => this.events = events);
  }

  handleThumbnailClick(eventName) {
    this._toastrService.success(eventName);
  }
}
