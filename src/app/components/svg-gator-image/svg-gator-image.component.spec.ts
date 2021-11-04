import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimtationSpritesComponent } from '../animation-sprites/animation-sprites.component';

describe('AnimtationSpritesComponent', () => {
  let component: AnimtationSpritesComponent;
  let fixture: ComponentFixture<AnimtationSpritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimtationSpritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimtationSpritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
