export class Robot {

    private previous = 0;
    private stateDirect = 'n'; // n unknow // u is up // d is down

    public process(price: number): string {


        if (this.previous == 0) {
            this.previous = price
            return ''
        }

        if (this.stateDirect != 'd' && price - this.previous >= 2.0) {
            this.previous = price;
            this.stateDirect = 'u'
            return `LF @${price.toFixed(1)} x 1`
        }

        if (this.previous - price >= 5.0 && this.stateDirect != 'd' ) {
            this.previous = price
            this.stateDirect = 'd'
            return `SF @${price.toFixed(1)} x 1`
        }

        if (this.previous - price >= 2.0 && this.stateDirect != 'u') {
            this.previous = price
            this.stateDirect = 'd'
            return `SF @${price.toFixed(1)} x 1`
        }


        if (price - this.previous >= 5.0 && this.stateDirect != 'u') {
            this.previous = price
            this.stateDirect = 'u'
            return `LF @${price.toFixed(1)} x 1`
        }
        return ''
    }


}