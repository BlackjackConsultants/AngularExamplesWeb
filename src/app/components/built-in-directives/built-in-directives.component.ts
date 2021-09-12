import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
  color!: number;  // 1 - red, 2 - blue, 3 - yellow
  value = 1;
  currentStyle = { 'background-color' : 'red' };
  constructor() { }

  ngOnInit() {
  }

  changeColor(color: number) {
    // tslint:disable-next-line: no-console
    console.debug(color);
    this.color = color;
  }

  onAdd() {
    this.value++;
  }
}
