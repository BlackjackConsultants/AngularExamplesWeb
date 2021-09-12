import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndContainersComponent } from './template-and-containers.component';

describe('TemplateAndContainersComponent', () => {
  let component: TemplateAndContainersComponent;
  let fixture: ComponentFixture<TemplateAndContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAndContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAndContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
