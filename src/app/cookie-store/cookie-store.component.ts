import {Component} from '@angular/core';
import {CookieClientService} from '../services/cookie-client.service';
import {MatDialog} from '@angular/material/dialog';
import {WalletStatus} from './loading-wallet-dialog/loading-wallet-dialog.component';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-cookie-store',
  templateUrl: './cookie-store.component.html',
  styleUrls: ['./cookie-store.component.scss']
})
export class CookieStoreComponent {

  walletStatus: WalletStatus;

  private isConnectedSubject: Subject<boolean> = new ReplaySubject(1);
  private isMissingSubject: Subject<boolean> = new BehaviorSubject(false);

  constructor(private readonly cookieService: CookieClientService, public dialog: MatDialog) {
    this.walletStatus = {
      isConnected: this.isConnectedSubject.asObservable(),
      isMissing: this.isMissingSubject.asObservable()
    };
    cookieService.isWalletConnected.subscribe(isConnected => {
      this.isConnectedSubject.next(isConnected);
    }, missing => {
      this.isMissingSubject.next(true);
    });
  }

}
