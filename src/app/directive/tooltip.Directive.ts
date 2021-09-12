import { OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[sToolTip]'
})
export class SToolTipDirective implements OnInit {


  elToolTip: any;
  toolTip!: 'it works!!!!';
  child!: HTMLDivElement;

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.elToolTip) { this.showHint(); }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.elToolTip) { this.removeHint(); }
  }

  ngOnInit(): void {
    console.debug('initializing sToolTipDirective');
  }

  removeHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.renderer.removeChild(this.elementRef.nativeElement, this.child);
    this.elToolTip = null;
  }

  /**
   * the tooltip appends to body because it is floating.
   */
  showHint() {
    // append to element
    this.child = document.createElement('div');
    const text1 = this.renderer.createText('tooltip added');
    this.renderer.appendChild(this.child, text1);
    this.renderer.appendChild(this.elementRef.nativeElement, this.child);
    this.renderer.setStyle(this.child, 'background-color', `red`);

    // append tooltip to document
    this.elToolTip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.toolTip);
    this.renderer.appendChild(this.elToolTip, text);

    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.elToolTip.getBoundingClientRect();

    const top = hostPos.bottom + 10;
    const left = hostPos.left;

    // set styles
    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
    this.renderer.setStyle(this.elToolTip, 'height', `300px`);
    this.renderer.setStyle(this.elToolTip, 'width', `300px`);
    this.renderer.setStyle(this.elToolTip, 'color', `white`);
    this.renderer.setStyle(this.elToolTip, 'background-color', `blue`);
    this.renderer.setStyle(this.elToolTip, 'display', `block`);
    this.renderer.setStyle(this.elToolTip, 'position', `absolute`);
  }
}
