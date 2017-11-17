import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// some crazy page to generate the regex just with some samples!
// http://txt2re.com http://regex.inginf.units.it/
// my favorite regex generator
// https://regex101.com/

// based on this test i used Diego Perinis URL regex and modified it to ignore the protocol prefix
// https://gist.github.com/dperini/729294#file-regex-weburl-js-L60
// TODO use Diegos Script for the benefits of updates
// i modified the first two clamps and added a ? after the protocol prefix an // to accept urls like  uni-frankfurt.de
const URL_REGEX =    /^(?:(?:https?|ftps?|mailto):)?(\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
// https://regex101.com/r/QTFb0t/1
const GOETHE_URL_REGEX = /^(?:.*\.)?(?:uni\-frankfurt\.de)(?:\/.*)?$/;
// const COMBINED_URL_REGEX = new RegExp(URL_REGEX.source + GOETHE_URL_REGEX.source);

  @Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {

  inputUsed = false;
  moreOptions = false;
  inputURL = '';
  loggedInVar = false;

  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX), Validators.pattern((GOETHE_URL_REGEX))]);

  constructor() { }

  ngOnInit() {
  }

  onShorten() {
    this.loggedInVar = true;
  }
}
