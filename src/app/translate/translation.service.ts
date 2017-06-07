import {Injectable} from '@angular/core';
import {TRANSLATIONS} from "./translations";

@Injectable()
export class TranslationService {
  private language = 'en';
  private translations;

  constructor() {
    this.translations = TRANSLATIONS;
  }

  get currentLang() {
    return this.language;
  }

  set currentLang(lang: string) {
    this.language = lang;
  }

  translate(string: string): string {
    if (this.language === 'en') return string;
    return this.translations[this.language][string];
  }
}
