import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @ViewChild('visibleElement') visibleElement!: ElementRef;

  constructor() { }

  onClick() {
    let isVisible = this.isVisible(this.visibleElement);
    let isVisible2 = this.isScrolledIntoView(this.visibleElement);
    console.debug('The element visibility check using method 1 is: ' + isVisible);
    console.debug('The element visibility check using method 2 is: ' + isVisible2);
  }

  onMouseOver() {
    alert('onMouseOver');
  }

  press() {
    alert('test');
  }

  ngOnInit() {
  }

  // Where el is the DOM element you'd like to test for visibility
  isVisible(el: any) {
    console.debug('isScrolledIntoView: ' + this.isScrolledIntoView(el));
    console.debug('offsetWidth' + el.nativeElement.offsetWidth);
    console.debug('offsetHeight' + el.nativeElement.offsetHeight);
    console.debug('offsetParent' + el.nativeElement.offsetParent !== null);
    return el.nativeElement.offsetWidth > 0 && el.nativeElement.offsetHeight > 0 && el.nativeElement.offsetParent !== null;
  }

  isScrolledIntoView(el: any) {
    let rect = el.nativeElement.getBoundingClientRect();
    let top = rect.top;
    let height = rect.height;
    el = el.nativeElement.parentNode;
    do {
      rect = el.getBoundingClientRect();
      if (top <= rect.bottom === false) return false;
      // Check if the element is out of view due to a container scrolling
      if ((top + height) <= rect.top) return false
      el = el.parentNode;
    } while (el != document.body);
    // Check its within the document viewport
    return top <= document.documentElement.clientHeight;
  }
}
