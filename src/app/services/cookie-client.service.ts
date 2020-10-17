import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable, of, ReplaySubject, Subject, throwError} from 'rxjs';
import {TronWeb} from 'tronweb';
import {concatMap, delay, flatMap, map, retryWhen, take, tap} from 'rxjs/operators';
import {Contract, EthNumber} from 'contract';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieClientService {

  private readonly contract: Observable<Contract>;
  private readonly tron: Observable<TronWeb>;
  private readonly tronSubject: Subject<TronWeb> = new ReplaySubject<TronWeb>(1);
  address: Observable<string>;
  isWalletConnected: Subject<boolean> = new ReplaySubject<boolean>(1);
  refreshNumbers: Subject<boolean> = new BehaviorSubject(true);

  constructor(private winRef: WindowRef) {
    this.isWalletConnected.next(false);
    this.tron = this.getTronWebWithRetries();
    this.contract = this.tron.pipe(
      flatMap(t => from(t.contract().at(environment.contractAddress))),
      tap(() => this.isWalletConnected.next(true),
        error => this.isWalletConnected.error(error)),
      take(1)
    );
    this.address = this.getAddressWithRetries();
    this.enableCapturingEvents();
  }

  private getTronWebWithRetries(): Observable<TronWeb> {
    return of<TronWeb>(this.winRef.nativeWindow.tronWeb)
      .pipe(
        tap(tron => {
          if (tron == null) {
            throw new Error('TronWeb not present!');
          }
        }),
        this.retryThenThrow(20),
        tap(t => {
          if (t != null) {
            this.tronSubject.next(t);
          }
        })
      );
  }

  private getAddressWithRetries(): Observable<string> {
    return this.tronSubject.asObservable().pipe(
      map(t => t.defaultAddress.base58),
      tap(address => {
        if (typeof address == 'boolean') {
          throw new Error('TronWeb not logged in!');
        }
      }),
      this.retryThenThrow(16),
      take(1)
    );
  }

  private retryThenThrow<T>(times: number) {
    let retryCount = 0;
    return retryWhen<T>(errors => errors.pipe(delay(500), concatMap(error => {
      if (retryCount++ > times) {
        return throwError(error);
      } else {
        return of(error);
      }
    })));
  }

  private enableCapturingEvents() {
    this.contract.subscribe((c: Contract) => {
      console.log('enabled watching');
      c.CookiesShared().watch((error, event) => {
        console.log('Cookie error ' + error);
        console.log(event);
      });
      c.Transfer().watch((error, event) => {
        console.log('Transfer error: ' + error);
        console.log(event);
      });
    });
  }

  totalSupply(): Observable<number> {
    return this.refreshNumbers.asObservable().pipe(
      flatMap(() =>
        this.contract.pipe(
          flatMap(c => from(c.totalSupply().call())),
          map(s => this.toNumber(s))
        )));
  }

  balanceOf(ownerAddress: string): Observable<number> {
    return this.refreshNumbers.asObservable().pipe(
      flatMap(() =>
        this.contract.pipe(
          flatMap(c => from(c.balanceOf(ownerAddress).call())),
          map(s => this.toNumber(s))
        )));
  }

  transfer(recipientAddress: string, value: number): Observable<boolean> {
    return this.contract.pipe(
      flatMap(c => from(c.transfer(recipientAddress, this.toEthNumber(value)).send()))
    );
  }

  cookieMonsterCount(): Observable<number> {
    return this.refreshNumbers.asObservable().pipe(
      flatMap(() =>
        this.contract.pipe(
          flatMap(c => from(c.cookieMonsterCount().call())),
          map(s => this.toNumber(s))
        )));
  }

  isAddress(address: string): Observable<boolean> {
    return this.tron.pipe(map(t => t.isAddress(address)));
  }


  private toNumber(ethNumber: EthNumber): number {
    return parseInt(ethNumber._hex, 16);
  }

  private toEthNumber(value: number): string {
    return `0x${value.toString(16)}`;
  }

}

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }
}
