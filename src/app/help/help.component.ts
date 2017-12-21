import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }

  // TODO i18n
  whiteList = [
    { url: 'uni-frankfurt.de',
      description: 'Alle Seiten innerhalb der Goethe-Universität' },
    { url: 'goethe-university-frankfurt.de',
      description: 'Englischsprachige Seiten im CMS der Goethe-Universität' },
    { url: 'hebis.de',
      description: 'Hessischer Bibliotheksverbund (intensiv genutzt durch Universitätsbibliothek)' },
    { url: 'asta-frankfurt.de',
      description: 'Allgemeiner Studierendenausschuss der Goethe-Universität' },
  ];

  ngOnInit() {
  }

}
