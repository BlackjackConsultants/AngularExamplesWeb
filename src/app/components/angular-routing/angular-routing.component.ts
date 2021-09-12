import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-routing-component',
  templateUrl: './angular-routing.component.html',
  styleUrls: ['./angular-routing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AngularRoutingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['routing', { outlets: { 'test': ['testOutlet'] } }]);
  }
}
