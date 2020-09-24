import { Component, OnInit } from '@angular/core';
import { RobotRunner } from "../../model/robot-runner";
  
@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {


  public runner  : RobotRunner;
  constructor() { }

  ngOnInit() {
    this.runner = new RobotRunner();
    this.runner.start();
  }

}
