export class Candlestick {
    constructor( 
        public open = 0 , 
        public close = 0
                ) {
        // this.open = open
        // this.close = close
    }

    //property  >> method มีวงเล็บ ตัวแปรไม่ต้องมีวงเล็บเวลานำไปใช้
    // public open: number = 0;
    // public close: number = 0;

    public get color() {
        if (this.open < this.close)
         return 'green';
        else
        return 'red';
    }


}