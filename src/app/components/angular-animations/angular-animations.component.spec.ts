import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimationsComponent } from './angular-animations.component';

describe('AngularAnimationsComponent', () => {
  let component: AngularAnimationsComponent;
  let fixture: ComponentFixture<AngularAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
