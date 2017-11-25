import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent, HelpModalComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AngularmdcwebModule } from './angularmdcweb/angularmdcweb.module';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { routing } from './app.routing';
import { ShortenerComponent, LoginReminderDialogComponent } from './shortener/shortener.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    HelpComponent,
    ShortenerComponent,
    LoginReminderDialogComponent,
    HelpModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularmdcwebModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MatDialogModule,
  ],
  entryComponents: [
    LoginReminderDialogComponent,
    HelpModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
