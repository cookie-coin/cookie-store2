import {Component} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-random-cookie-message',
  templateUrl: './random-cookie-message.component.html',
  styleUrls: ['./random-cookie-message.component.scss']
})
export class RandomCookieMessageComponent {

  // TODO think about more of those
  cookieMessages = ['A cookie a day keeps the doctor away :)',
    'Cookies taste better if you share them with your friends :)'];

  cookieMessage: Observable<string> = timer(0, 1000 * 60 * 5)
    .pipe(
      map(() => this.cookieMessages.length - 1),
      map(messageCount => Math.floor(Math.random() * messageCount)),
      map(randomIndex => this.cookieMessages[randomIndex])
    );

}
