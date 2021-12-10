import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponentComponent implements OnInit {
  _controlWidth: number = 222;
  @ViewChild('divToScroll')
  divToScroll!: ElementRef;
  
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

  scroll() {
    this.divToScroll.nativeElement.scrollTop = this.divToScroll.nativeElement.scrollHeight;
  }

}
