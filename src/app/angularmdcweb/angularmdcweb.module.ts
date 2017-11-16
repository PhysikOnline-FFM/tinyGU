import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdcCoreModule, // required
  MdcTextfieldModule,
  MdcButtonModule
} from '@angular-mdc/web';

@NgModule({
  imports: [
    MdcCoreModule, // required
    MdcTextfieldModule,
    MdcButtonModule
  ],
  exports: [
    MdcCoreModule, // required
    MdcTextfieldModule,
    MdcButtonModule
  ],
})
export class AngularmdcwebModule { }
