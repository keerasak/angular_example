import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 public person : Person
 public people : Person[] = [];
  constructor() { }

  ngOnInit(): void {
    this.person = new Person(170,65)

    let Benz = new Person(169,65)
    let Book = new Person(173,69)
    this.people.push(Benz,Book)
  }

}