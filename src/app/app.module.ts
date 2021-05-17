import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { EventsComponent } from './events/events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdeaDetailComponent } from './ideas/idea-detail/idea-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    EventsComponent,
    IdeaDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
