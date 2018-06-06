import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthService } from './user/user-auth.service';
import { EventListResolverService } from './events/event-list-resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/error-404.component';
import { EventRouteActivatorService } from './events/event-route-activator.service';
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './events/create-session.component';
import { SessionListComponent } from './events/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { JQ_TOKEN } from './common/j-query.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

const jQuery = window['$'];

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'error', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    UserModule
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    UserAuthService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
