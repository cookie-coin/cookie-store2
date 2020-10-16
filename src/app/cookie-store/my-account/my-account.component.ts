import {Component} from '@angular/core';
import {CookieClientService} from '../../services/cookie-client.service';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

const COOKIE_MONSTER_MIN_BALANCE = 1000;

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {

  myCookieAddress: String;
  myBalance: number;

  constructor(private readonly cookieService: CookieClientService, private readonly snackbar: MatSnackBar) {
    this.cookieService.address
      .pipe(tap(a => this.cookieService.balanceOf(a).subscribe(balance => this.myBalance = balance)))
      .subscribe(address => this.myCookieAddress = address);
  }

  showCopiedWellToClipboardEvent() {
    this.snackbar.open(`My Address successfully copied to ClipBoard!`, null, {
      duration: 2000
    });
  }

  isCookieMonster(): boolean {
    return this.myBalance >= COOKIE_MONSTER_MIN_BALANCE;
  }
}
