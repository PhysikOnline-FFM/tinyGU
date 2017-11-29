import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-http-response-modal',
  templateUrl: './http-response-modal.component.html',
  styleUrls: ['./http-response-modal.component.scss']
})
export class HttpResponseModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  // TODO if errorMessage, if completeMessage give sucess or error message, help, link etc
}
