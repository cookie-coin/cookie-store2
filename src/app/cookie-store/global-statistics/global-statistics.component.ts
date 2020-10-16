import {Component} from '@angular/core';
import {CookieClientService} from '../../services/cookie-client.service';

@Component({
  selector: 'app-global-statistics',
  templateUrl: './global-statistics.component.html',
  styleUrls: ['./global-statistics.component.scss']
})
export class GlobalStatisticsComponent {

  totalCookies: number;
  totalCookieMonsters: number;

  constructor(private readonly cookieService: CookieClientService) {
    this.cookieService.totalSupply().subscribe(cookies => {
      this.totalCookies = cookies;
    });
    this.cookieService.cookieMonsterCount().subscribe(monsters => {
      this.totalCookieMonsters = monsters;
    });
  }

}


