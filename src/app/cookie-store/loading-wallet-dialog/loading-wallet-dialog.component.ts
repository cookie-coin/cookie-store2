import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {WindowRef} from '../../services/cookie-client.service';

@Component({
  selector: 'app-loading-wallet-dialog',
  templateUrl: './loading-wallet-dialog.component.html',
  styleUrls: ['./loading-wallet-dialog.component.scss']
})
export class LoadingWalletDialogComponent {

  walletNotInstalled: boolean = false;

  constructor(public dialogRef: MatDialogRef<LoadingWalletDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public walletStatus: WalletStatus,
              private winRef: WindowRef) {
    walletStatus.isWalletConnected.subscribe(status => {
      if (status) {
        dialogRef.close();
      }
    }, _ => {
      this.walletNotInstalled = true;
    });
  }

  reloadStore() {
    this.winRef.nativeWindow.location.reload();
  }

}

export interface WalletStatus {
  isWalletConnected: Observable<boolean>
}
