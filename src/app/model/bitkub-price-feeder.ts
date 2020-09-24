import { PriceFeeder } from "./price-feeder";
import { Observable, from, timer, Subject } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { MarketTicker } from "./market-ticker";

export class BitkubPriceFeeder extends PriceFeeder {

  private subject: Subject<number>;
  private url = 'https://api.bitkub.com/api/market/ticker?sym=THB_BTC';

  constructor() {
    super();
    this.subject = new Subject<number>();
  }

  public feeder(): Observable<number> {
    timer(5 * 1000).subscribe(
      n => {
        ajax(this.url).subscribe(
          (res: AjaxResponse) => {
            const ticker = res.response as MarketTicker;
            
            this.subject.next(ticker.THB_BTC.last);
          }
        )
      }
    )

    return this.subject;
  }

}