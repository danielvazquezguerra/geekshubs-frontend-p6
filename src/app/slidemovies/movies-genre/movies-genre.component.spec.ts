import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGenreComponent } from './movies-genre.component';

describe('MoviesGenreComponent', () => {
  let component: MoviesGenreComponent;
  let fixture: ComponentFixture<MoviesGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
