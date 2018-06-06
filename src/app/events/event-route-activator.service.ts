import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private _eventService: EventService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this._eventService.getEvent(+route.params['id']);
    if (!eventExists) {
      this._router.navigate(['/error']);
    }
    return eventExists;
  }
}
