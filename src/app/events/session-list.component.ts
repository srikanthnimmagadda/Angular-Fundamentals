import { ISession } from './../model/isession';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSesions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAse) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSesions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAse(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

