import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { ShortenerComponent } from './shortener/shortener.component';

const APP_ROUTES: Routes = [
  // { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '', component: ShortenerComponent, pathMatch: 'full' },
  { path: 'short', component: ShortenerComponent},
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'help', component: HelpComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
