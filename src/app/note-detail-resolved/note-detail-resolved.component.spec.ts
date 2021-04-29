import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailResolvedComponent } from './note-detail-resolved.component';

describe('NoteDetailResolvedComponent', () => {
  let component: NoteDetailResolvedComponent;
  let fixture: ComponentFixture<NoteDetailResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailResolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
