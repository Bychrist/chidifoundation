import { Component } from '@angular/core';
import { CoolHttp } from '@angular-cool/http';
import { NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { filter } from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean;
  constructor(private router: Router) {
  this.loading = false;

   this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(
        (event) => {



         this.loading = true
        }
      )


    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(
        (event) => {

          setTimeout(() => {
            this.loading = false
          }, 3000)




        }
      )



  }

  title = 'Chidi Anyaegbu Education Foundation';






}
