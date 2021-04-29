import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteDetailStandardComponent} from './note-detail-standard/note-detail-standard.component';
import {NoteDetailResolvedComponent} from './note-detail-resolved/note-detail-resolved.component';
import {NoteResolverService} from './note-resolver.service';

const routes: Routes = [
  {
    path: 'standard/:id',
    component: NoteDetailStandardComponent
  },
  {
    path: 'resolved/:id',
    component: NoteDetailResolvedComponent,
    resolve: {note: NoteResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
