import { Component, ViewEncapsulation, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild('sidenavContainer', { read: ElementRef }) sidenav!: ElementRef;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngAfterViewInit() {
    let bd = this.sidenav.nativeElement.querySelector('.example-sidenav-content');
    bd.addEventListener('click', this.onClick.bind(this));
  }

  onClick(_event: any) {
    ////alert('it works!!!!');
  }
}
