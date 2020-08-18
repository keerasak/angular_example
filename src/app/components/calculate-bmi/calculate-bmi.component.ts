import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
@Component({
  selector: 'app-calculate-bmi',
  templateUrl: './calculate-bmi.component.html',
  styleUrls: ['./calculate-bmi.component.css']
})
export class CalculateBmiComponent implements OnInit {
  public person : Person;
  constructor() { }

  ngOnInit() {
  }

} 
