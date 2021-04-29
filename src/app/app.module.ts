import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDetailStandardComponent } from './note-detail-standard/note-detail-standard.component';
import { NoteDetailResolvedComponent } from './note-detail-resolved/note-detail-resolved.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailStandardComponent,
    NoteDetailResolvedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
