import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../note';

@Component({
  selector: 'app-note-detail-resolved',
  templateUrl: './note-detail-resolved.component.html',
  styleUrls: ['./note-detail-resolved.component.css']
})
export class NoteDetailResolvedComponent implements OnInit {
  note: Note;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.note = this.route.snapshot.data.note;
  }

}
