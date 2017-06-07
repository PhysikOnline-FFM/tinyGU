import {AfterViewChecked, Component} from '@angular/core';
import {STRINGS} from "../../strings";
import {TranslationService} from "./translate/translation.service";
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  loggedIn = false;
  strings = STRINGS;

  constructor(private translationService: TranslationService) {}

  onLanguageChange() {
    if (this.translationService.currentLang === "de") {
      this.translationService.currentLang = "en"
    } else {
      this.translationService.currentLang = "de";
    }
  }

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
