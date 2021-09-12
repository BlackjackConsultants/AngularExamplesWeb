import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  AequalsStringB!: boolean;
  AequalsNumberB!: boolean;
  AequalsEqualsNumberB!: boolean;

  constructor() { }

  ngOnInit() {
  }

  testAequalsStringB() {
    let a: number = 5;
    let b: number = 5;
    this.AequalsEqualsNumberB = a === b;
  }

  testAequalsNumberB() {
    let a: number = 5;
    let b: number = 5;
    this.AequalsEqualsNumberB = a === b;
  }

  testAequalsEqualsNumberB() {
    let a: number = 5;
    let b: number = 5;
    this.AequalsEqualsNumberB = a === b;
  }
}
