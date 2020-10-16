import {Component} from '@angular/core';
import {CookieClientService} from '../services/cookie-client.service';
import {MatDialog} from '@angular/material/dialog';
import {LoadingWalletDialogComponent} from './loading-wallet-dialog/loading-wallet-dialog.component';

@Component({
  selector: 'app-cookie-store',
  templateUrl: './cookie-store.component.html',
  styleUrls: ['./cookie-store.component.scss']
})
export class CookieStoreComponent {

  constructor(private readonly cookieService: CookieClientService, public dialog: MatDialog) {
    this.dialog.open(LoadingWalletDialogComponent, {
      data: {isWalletConnected: this.cookieService.isWalletConnected.asObservable()},
      minWidth: '350px',
      minHeight: '150px',
      disableClose: true
    });
  }


}
