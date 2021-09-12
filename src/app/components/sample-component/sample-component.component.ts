import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponentComponent implements OnInit {
  _controlWidth: number = 222;

  get controlWidth(): number {
    return this._controlWidth;
  }

  @Input()
  set controlWidth(val: number) {
    this._controlWidth = val;
  }

  @Input()
  controlHeight: number = 222;

  constructor() { }

  ngOnInit() {
  }

}
