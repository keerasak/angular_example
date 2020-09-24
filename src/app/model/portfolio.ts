import { Order } from './order'
import { OrderSide } from './order-site';
import * as _ from 'lodash';

export class Portfolio {
    public initialCash = 0;
    private _orders: Order[] = [];
    public name = "Portfolio";

    public get orders(): readonly Order[] {
        return this._orders; //  as readonly Order[];
    }

    //Sum
    public get balanceTHB() {
        let result = this.initialCash;
        // 1.
        // for (let i = 0; i < this.orders.length; i++) {
        //     const o = this.orders[i];
        //     if (o.side == OrderSite.Buy) {
        //         result -= o.ThaiBaht;
        //     } else {
        //         result += o.ThaiBaht
        //     }
        // }

        //2.
        // this.orders.forEach(o => {
        //     if (o.side == OrderSite.Buy) {
        //         result -= o.ThaiBaht;
        //     } else {
        //         result += o.ThaiBaht
        //     }
        // });

        // 3.
        // for (let o of this.orders) {
        //     if (o.side === OrderSide.Buy) {
        //         result += o.volumeBTC;
        //     } else {
        //         result -= o.volumeBTC;
        //     }
        // }

        //4. 
        // result = _.sumBy(this.orders, o => o.side === OrderSide.Buy ? o.volumeBTC : -o.volumeBTC)

        // 5.
        // result = _.sumBy(this.orders, o => {
        //     if (o.side === OrderSide.Buy) return o.volumeBTC
        //     else return -o.volumeBTC;
        // });

        //6.
        result = _.reduce(
            this.orders,
            (total, o) => (o.side === OrderSide.Buy ? o.volumeBTC : -o.volumeBTC) + total,
            0
          );
        return result;
    }
    public get balanceBTC() {
        let result = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const o = this.orders[i];
            if (o.side === OrderSide.Buy) {
                result += o.volumeBTC;
            } else {
                result -= o.volumeBTC;
            }
        }
        return result;
    }

    public buy(id: number, priceBTC: number, volumeBTC: number) {
        const o = new Order();
        o.id = id;
        o.priceBTC = priceBTC;
        o.volumeBTC = volumeBTC;
        // if (o.ThaiBaht > this.balanceTHB) {
        //     throw `${id}: Thai Baht is not enough to buy`;
        //   }
      
          this._orders.push(o);
    }

    public sell(id: number, priceBTC: number, volumeBTC: number) {
        if (volumeBTC > this.balanceBTC) {

            throw 'Bitcoin is not enough to sell';
        }
        const o = new Order();
        o.id = id;
        o.side = OrderSide.Sell;
        o.priceBTC = priceBTC;
        o.volumeBTC = volumeBTC;
        this._orders.push(o);
    }
    public remove(item: Order) {
        // const n  = this.orders.indexOf(item)
        // this.orders.slice(n,1)
        this._orders = _.without(this.orders, item);
    }
}