import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllLinks().subscribe( (result) => console.log(result) );
  }

}
