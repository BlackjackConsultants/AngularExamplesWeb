import { Component, OnInit } from '@angular/core';
// import {HttpModule} from '@angular/http';
import { ContentChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { StepDirective1, StepDirective2, StepDirective3, StepDirective4, StepDirective5 } from 'src/app/directive/step-directive.directive';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { MediaObserver , MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-responsive-stepper',
  templateUrl: './responsive-stepper.component.html',
  styleUrls: ['./responsive-stepper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveStepperComponent implements OnInit{
  @ContentChild(StepDirective1, { read: TemplateRef }) stepDirective1: any;
  @ContentChild(StepDirective2, { read: TemplateRef }) stepDirective2: any;
  @ContentChild(StepDirective3, { read: TemplateRef }) stepDirective3: any;
  @ContentChild(StepDirective4, { read: TemplateRef }) stepDirective4: any;
  @ContentChild(StepDirective5, { read: TemplateRef }) stepDirective5: any;
  isDesktop!: boolean;
  @Input()
  visibleSteps!: number;
  watcher!: Subscription;
  stepper: any;

  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit() {
    // observe responsive ui changes.
    this.isDesktop = true;
    this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.loadMobileContent();
      }
      else {
        this.loadDeskTopContent();
      }
    });
  }

  loadMobileContent() {
    this.isDesktop = false;
  }

  loadDeskTopContent(): any {
    this.isDesktop = true;
  }

}
