import { Subject } from 'rxjs/Subject';
import { EventService } from './../shared/event.service';
import { ISession } from './../model/isession';
import { UserAuthService } from './../user/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(public userAuthService: UserAuthService, private _eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this._eventService.serchSessions(searchTerm).subscribe(
      sessions => {
      this.foundSessions = sessions;
      });
  }
}
