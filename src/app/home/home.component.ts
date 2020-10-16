import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {CookieClientService} from '../services/cookie-client.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly client: CookieClientService) {

  }

  async ngOnInit(): Promise<void> {
    /*
    Nile testnet info:
(0) TDi7EhqKChSeDSc5hHZP9rmqdB7xJhFmkY (100000 TRX)

(0) 2a825788e72890070a67baa9d4a6fb86a1d4cb0be90e1d6c7335dea5acdb3240
    * */


    /*this.client.totalSupply().subscribe(sup => console.log('total supply: ' + sup));

    this.client.address.subscribe(address => {
      console.log('my address: ' + address);

      this.client.balanceOf(address).subscribe(balance => {
        console.log('my balance: ' + balance);
      });

    });*/


    /*  this.contract.subscribe(c => {
        console.log(c);

        from(c.totalSupply().call()).subscribe( (supply: EthNumber) => {
          console.log(BigInt(supply._hex).toString(10));
        });

        // {address : tronWeb.defaultAddress.base58}
        this.tron.subscribe(t => {

          //console.log(t.defaultAddress.base58);

        });

        from(c.cookieMonsterCount().call()).subscribe((monsters:EthNumber) => {
          console.log(BigInt(monsters._hex).toString(10));
        });

      });*/

  }

}

