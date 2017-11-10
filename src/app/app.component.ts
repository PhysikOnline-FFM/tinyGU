import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TinyGU';
  navItems = [
    { name: 'About', route: '/about' },
    { name: 'Account', route: '/account' },
    { name: 'Help', route: '/help' },
  ];
}
