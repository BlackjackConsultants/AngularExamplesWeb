import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, TemplateRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked, Renderer2 } from '@angular/core';
import { SampleComponentComponent } from '../sample-component/sample-component.component';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CssGridComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild("domData") domData!: ElementRef;
  @ViewChild("game") game!: ElementRef;


  constructor(private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  get width(): number {
    if (this.domData) {
      return this.domData.nativeElement.clientWidth;
    }
    return 0;
  }

  get height(): number {
    if (this.domData) {
      return this.domData.nativeElement.clientHeight;
    }
    return 0;
  }

  setPosition() {
    this.renderer.setStyle(this.domData.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.domData.nativeElement, 'top', '0');
    this.renderer.setStyle(this.domData.nativeElement, 'left', '0');
  }

  rotate() {
    this.renderer.setStyle(this.domData.nativeElement, '-webkit-transform-origin', '50% 50%');
    this.renderer.setStyle(this.domData.nativeElement, '-moz-transform-origin', '50% 50%');
    this.renderer.setStyle(this.domData.nativeElement, '-o-transform-origin', '50% 50%');
    this.renderer.setStyle(this.domData.nativeElement, 'transform-origin', '50% 50%');
    this.renderer.setStyle(this.domData.nativeElement, 'transform', 'rotate(270deg)');
  }

  adjust() {
    let w = this.game.nativeElement.clientWidth;
    let h = this.game.nativeElement.clientHeight;
    this.renderer.setStyle(this.domData.nativeElement, 'width', h + 'px');
    this.renderer.setStyle(this.domData.nativeElement, 'height', w + 'px');
  }

  setLeft() {
    let w = this.game.nativeElement.clientWidth;
    let h = this.game.nativeElement.clientHeight;
    let d = (h - w) / 2;
    console.debug('h - d = ' + d);
    this.renderer.setStyle(this.domData.nativeElement, 'left', '-' + d + 'px');
  }

  setTop() {
    let w = this.game.nativeElement.clientWidth;
    let h = this.game.nativeElement.clientHeight;
    let d = (h - w) / 2;
    console.debug('h - d = ' + d);
    this.renderer.setStyle(this.domData.nativeElement, 'top',  d + 'px');
  }

  allInOne() {
    this.setPosition();
    this.rotate();
    this.adjust();
    this.setLeft();
    this.setTop();
  }
}
