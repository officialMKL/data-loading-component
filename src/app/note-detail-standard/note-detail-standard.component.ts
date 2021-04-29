import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Note} from '../note';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-note-detail-standard',
  templateUrl: './note-detail-standard.component.html',
  styleUrls: ['./note-detail-standard.component.css']
})
export class NoteDetailStandardComponent implements OnInit {
  note$: Observable<Note>;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.note$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.noteService.getNoteById(id))
    );
  }

}
