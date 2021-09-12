import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg-gator-image',
  templateUrl: './svg-gator-image.component.html',
  styleUrls: ['./svg-gator-image.component.css']
})
export class SvgGatorImage implements OnInit {
  animate: boolean = false;

  @ViewChild('shuffleElement')
  shuffleElement!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.animate = !this.animate;
  }

  onClick2() {
    
  }
}
