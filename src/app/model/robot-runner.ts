import { PriceFeeder } from "./price-feeder";
import { Robot } from "./robot";
import { BacktestPriceFeeder } from "./backtest-price-feeder";

export class RobotRunner {
    private feeder: PriceFeeder;
    private robot: Robot;

    constructor() {
        this.feeder = new BacktestPriceFeeder();
        this.robot = new Robot();
    }

    public start() {
        this.feeder.feeder().subscribe(
            p => {
                const s = this.robot.process(p);
                if (s !== '') console.log(s) // price
            }
        );
    }

}