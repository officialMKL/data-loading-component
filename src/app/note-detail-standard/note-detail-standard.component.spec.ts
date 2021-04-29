import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailStandardComponent } from './note-detail-standard.component';

describe('NoteDetailStandardComponent', () => {
  let component: NoteDetailStandardComponent;
  let fixture: ComponentFixture<NoteDetailStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
