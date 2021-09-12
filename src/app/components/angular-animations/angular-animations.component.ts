import { Component, OnInit } from '@angular/core';
import { colorAnimation } from '../../animations/animations';

@Component({
  selector: 'app-angular-animations',
  animations: [colorAnimation],
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css']
})
export class AngularAnimationsComponent implements OnInit {
  colorAnimationState!: string;
  color: string = 'purple';
  top: string = '688px';

  constructor() { }

  ngOnInit() {
    this.colorAnimationState = 'animateStart';
  }

  animateStart() {
    this.colorAnimationState = 'animateStart';
    console.debug('animateEnd');
  }

  animateEnd() {
    this.colorAnimationState = 'animateEnd';
    console.debug('animateEnd');
  }


}
