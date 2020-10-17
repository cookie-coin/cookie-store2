import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WindowRef} from '../../services/cookie-client.service';
import {filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-loading-wallet-dialog',
  templateUrl: './loading-wallet-dialog.component.html',
  styleUrls: ['./loading-wallet-dialog.component.scss']
})
export class LoadingWalletDialogComponent implements OnInit {

  @Input()
  walletStatus: WalletStatus;

  isConnected: boolean = false;
  isMissing: boolean = false;

  constructor(private winRef: WindowRef) {
  }

  ngOnInit(): void {
    this.walletStatus.isConnected
      .pipe(filter(connected => connected), take(1))
      .subscribe(connected => this.isConnected = connected);
    this.walletStatus.isMissing
      .pipe(filter(missing => missing), take(1))
      .subscribe(missing => this.isMissing = missing);
  }

  reloadStore() {
    this.winRef.nativeWindow.location.reload();
  }
}

export class WalletStatus {
  isConnected: Observable<boolean>;
  isMissing: Observable<boolean>;
}
