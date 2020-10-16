import {Component} from '@angular/core';
import {CookieClientService} from '../../services/cookie-client.service';
import {map, tap} from 'rxjs/operators';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-transaction',
  templateUrl: './cookie-transaction.component.html',
  styleUrls: ['./cookie-transaction.component.scss']
})
export class CookieTransactionComponent {

  myCookieAddress: String;
  myBalance: number;

  cookieTransactionForm = this.formBuilder.group(
    {
      recipientAddress: new FormControl('', [Validators.required], cookieAddressValidator(this.cookieService)),
      amount: new FormControl('')
    }
  );

  constructor(private readonly cookieService: CookieClientService,
              private readonly formBuilder: FormBuilder,
              private readonly snackbar: MatSnackBar
  ) {
    this.cookieService.address
      .pipe(tap(a => this.cookieService.balanceOf(a).subscribe(balance => {
        this.myBalance = balance;
        this.addMaxAmountValidator(balance);
      })))
      .subscribe(address => {
        this.myCookieAddress = address;
      });
  }

  private addMaxAmountValidator(balance: number) {
    this.cookieTransactionForm.controls.amount
      .setValidators([Validators.required, Validators.min(100), Validators.max(balance)]);
  }

  getRecipientAddressControl(): FormControl {
    return this.cookieTransactionForm.get('recipientAddress') as FormControl;
  }

  getAmountControl(): FormControl {
    return this.cookieTransactionForm.get('amount') as FormControl;
  }

  sendCookies() {
    if (this.cookieTransactionForm.valid) {
      const recipient = this.getRecipientAddressControl().value;
      const amount = this.getAmountControl().value;

      this.cookieService.transfer(recipient, parseInt(amount)).subscribe(success => {
        if (success) {
          this.snackbar.open(`${amount} COOKIE successfully sent to '${recipient}'`, null, {
            duration: 4000
          });
          this.cookieService.refreshNumbers.next(true);
        } else {
          this.snackbar.open(`Failed sending COOKIE to recipient.`, null, {
            duration: 4000
          });
        }
      });
    }
  }
}

export const cookieAddressValidator = (cookieService: CookieClientService) => {
  return (input: FormControl) => {
    return cookieService.isAddress(input.value).pipe(
      map(isAddress => isAddress ? null : {addressInvalid: true})
    );
  };
};
