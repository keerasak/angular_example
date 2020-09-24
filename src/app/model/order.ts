import { OrderSide } from "./order-site";

export class  Order{
    public id =0;
    public side : OrderSide;
    public priceBTC = 0 ; //300,00thb/1BTC
    public volumeBTC = 0; //0.1 BTC
 //   public priceTHB = 0;
    public get ThaiBaht(){
        return this.priceBTC * this.volumeBTC
    }
}