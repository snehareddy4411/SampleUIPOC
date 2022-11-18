import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce Furniture';
  displayLoadingIndicator = false;

  constructor(private router:Router){ }
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event)=>{
      if(routerEvent instanceof NavigationStart)
      {
        this.displayLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel)
      {
        this.displayLoadingIndicator = false;
      }
    });
  }
}
