import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  template:`<!--<person-list></person-list>-->
  <nav>
    <a routerLink="/person-list" routerLinkActive="active">person</a>
    <a routerLink="/second-list" routerLinkActive="active">second</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
