import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAspectRatioComponent } from './css-aspect-ratio.component';

describe('CssAspectRatioComponent', () => {
  let component: CssAspectRatioComponent;
  let fixture: ComponentFixture<CssAspectRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAspectRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAspectRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
