import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {WindowRef} from './services/cookie-client.service';
import {CookieStoreComponent} from './cookie-store/cookie-store.component';
import {FooterComponent} from './cookie-store/footer/footer.component';
import {HeaderComponent} from './cookie-store/header/header.component';
import {GlobalStatisticsComponent} from './cookie-store/global-statistics/global-statistics.component';
import {RandomCookieMessageComponent} from './cookie-store/random-cookie-message/random-cookie-message.component';
import {CookieTransactionComponent} from './cookie-store/cookie-transaction/cookie-transaction.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {LoadingWalletDialogComponent} from './cookie-store/loading-wallet-dialog/loading-wallet-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MyAccountComponent} from './cookie-store/my-account/my-account.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CookieStoreComponent,
    FooterComponent,
    HeaderComponent,
    GlobalStatisticsComponent,
    RandomCookieMessageComponent,
    CookieTransactionComponent,
    PrivacyPolicyComponent,
    LoadingWalletDialogComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ClipboardModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
