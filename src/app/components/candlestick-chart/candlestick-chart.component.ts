import { Component, OnInit } from '@angular/core';
import { Candlestick} from '../../model/candlestick'
@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent implements OnInit {
  public candle : Candlestick;
  public test = `test`;
  constructor() { } 

  ngOnInit(): void {
    this.candle = new Candlestick(850,860)
  }

  public classForCandle(){
    return{
      g: this.candle.color ==='green',
      r: this.candle.color === 'red'
    }
  }
}
