import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Note} from './note';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNoteById(id: number): Observable<Note> {
    return of({
        id,
        topic: 'Data resolving',
        description: 'Random text that describes the topic'
    }).pipe(delay(1000));
  }
}
