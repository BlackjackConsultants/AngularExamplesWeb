import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutsComponent implements OnInit {
  shown!: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleMessageVisibility() {
    this.shown = !this.shown;
  }

}
