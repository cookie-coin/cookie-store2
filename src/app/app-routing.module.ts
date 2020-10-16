import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookieStoreComponent} from './cookie-store/cookie-store.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {path: 'store', component: CookieStoreComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: '**', component: CookieStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
