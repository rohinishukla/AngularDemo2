import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: ` <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{title}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/product']">Product List</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet> <!-- here o/p is printed for router links -->
  </div>
  `
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
