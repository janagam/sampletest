import { Component, OnInit, HostListener  } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  constructor(private router: Router, private activate: ActivatedRoute) { }

ngOnInit() {
  this.router.routeReuseStrategy.shouldReuseRoute = function() {
    return false;
};

this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
    }
});

const urlParams = [];
window.location.search.replace('?', '').split('&').forEach(function (e, i) {
    const p = e.split('=');
    urlParams[p[0]] = p[1];
});
 }

}
