import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Note} from './note';
import {Observable} from 'rxjs';
import {NoteService} from './note.service';

@Injectable({
  providedIn: 'root'
})
export class NoteResolverService implements Resolve<Note>{

  constructor(private noteService: NoteService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Note> {
    return this.noteService.getNoteById(route.params?.id);
  }
}
