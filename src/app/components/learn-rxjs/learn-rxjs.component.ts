import { Component, OnInit } from '@angular/core';
import { of, from, fromEvent, interval, Subscription, timer, range, empty } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import  {GitHubUser} from '../../model/github-user';
@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.scss']
})
export class LearnRxjsComponent implements OnInit {

  constructor() { }

  public sub: Subscription;

  ngOnInit() {
    const source1 = of(1, 2, 3, 'a', 'b', 'c');
    const source2 = from(['x', 'y', 'z']);
    const source3 = fromEvent(document.getElementById('text'), 'mouseover')
    const source4 = interval(2000);
    const source5 = timer(5000, 1000)
    const source6 = range(501, 100)
    const source7 = empty()
    const source8 = ajax('https://api.github.com/users?per_page=2')

    this.sub = source8.subscribe(
      (res: AjaxResponse) => {
        res.response.forEach((user : GitHubUser) => {
            console.log(user.login)
        });
      },
      err => console.error(err),
      () => console.log('done')
    );
  }

  public unsub() {
    if (!this.sub) return;

    this.sub.unsubscribe();
  }
}
