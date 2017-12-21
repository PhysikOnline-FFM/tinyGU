import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  title = 'TinyGU';
  easteregg = false;
  userLang = '';

  navItems = [
    { name: 'About', route: '/about' },
    { name: 'Account', route: '/account' },
    { name: 'Help', route: '/help' },
  ];

  // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
  // https://stackoverflow.com/questions/36914151/browser-language-detection
  // https://zzz.buzz/2016/01/13/detect-browser-language-in-javascript/
  langDetect() {
    this.userLang = navigator.language; // || window.navigator.userLanguage;
    alert('your language: \"' + this.userLang + '\"');
  }

  openHelpAsModal() {
    this.dialog.open(HelpModalComponent);
  }

}

// TODO export -> modal
@Component({
  selector: 'app-login-reminder-dialog',
  template: `
    <app-help></app-help>
    <!--<p>test</p>-->
  ` ,
  styleUrls: ['./help/help.component.scss']
})
export class HelpModalComponent {}
