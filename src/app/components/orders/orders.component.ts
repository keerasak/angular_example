import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../model/portfolio';
import { Order } from 'src/app/model/order';
import { OrderSide } from 'src/app/model/order-site';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public portfolios: Portfolio[] = [];
  public selectedPortfolio: Portfolio;
  public tempOrder = new Order();
  public faTrash = faTrash;

  constructor() { }
  ngOnInit(): void {
    const p1 = new Portfolio();
    p1.name = 'Portfolio A';
    p1.initialCash = 10_000;
    this.portfolios.push(p1)

    // const o1 = new Order();
    // o1.id = 921000
    // o1.side = OrderSite.Buy;
    // o1.priceBTC = 300_000;
    // o1.volumeBTC = 0.01;
    // p1.orders.push(o1)

    const p2 = new Portfolio();
    p2.name = 'Portfolio B';
    p2.initialCash = 100_000;
    this.portfolios.push(p2)

    const o2 = new Order();
    o2.id = 2
    o2.side = OrderSide.Buy;
    o2.priceBTC = 100_000;
    o2.volumeBTC = 0.01;
   // p2.orders.push(o2)

    p1.buy(921000, 300_000, 0.01);
    p1.buy(921001, 300_000, 0.01);
    p1.buy(921002, 350_000, 0.01);

   
    // public Sell(){

    // }
  }
  public Buy(){
      if (!this.selectedPortfolio) return;

      try {
        this.selectedPortfolio.buy(
          this.tempOrder.id,
          this.tempOrder.priceBTC,
          this.tempOrder.volumeBTC
        );
      } catch (error) {
        alert(error);
      }
    //buy(tempOrder.id,tempOrder.priceBTC,tempOrder.volumeBTC)
  }
  public Sell(){
  }
  public Remove(item : Order){
    
    if(!this.selectedPortfolio) return;
    alert("test")
    this.selectedPortfolio.remove(item)
  }
}
