import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';
// declare var $: any;

@Component({
  selector: 'app-css-aspect-ratio',
  templateUrl: './css-aspect-ratio.component.html',
  styleUrls: ['./css-aspect-ratio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CssAspectRatioComponent implements OnInit {
  private el: any;
  private elHeight!: number;
  private elWidth!: number;
  private wrapper: any;
  private resizeFlag!: boolean;

  constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer, private renderer: Renderer2) {
    iconRegistry.addSvgIcon('flashcards',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flashcards.svg'));
  }

  private doResize(event, ui) {
    this.resizeFlag = true;
    console.debug('doing resize');
    var scale, origin;
    scale = Math.min(
      ui.size.width / this.elWidth,
      ui.size.height / this.elHeight
    );
    this.el.css({
      transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
    });
    this.resizeFlag = false;
  }

  ngOnInit(): void {
    // this.el = $("#very-specific-design");
    this.elHeight = this.el.outerHeight();
    this.elWidth = this.el.outerWidth();
    // this.wrapper = $("#scaleable-wrapper");

    this.doResize(null, this.getStarterData());
  }

  getStarterData() {
    return {
      size: {
        width: this.wrapper.width(),
        height: this.wrapper.height()
      }
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (!this.resizeFlag) {
      console.debug('doing onResize');
      this.doResize(null, this.getStarterData());
    }
  }
}
