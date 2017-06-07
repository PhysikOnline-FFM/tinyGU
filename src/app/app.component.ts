import {AfterViewChecked, Component} from '@angular/core';
import {STRINGS} from "../../strings";
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  loggedIn = false;
  strings = STRINGS;

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
