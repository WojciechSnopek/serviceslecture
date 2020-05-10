import { Component, OnInit } from '@angular/core';
export interface Car { 
  colour: string;
  brand: string;
  doors: number;
 }

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public cars: Array<Car>;

  constructor() { }

  ngOnInit(): void {
    this.cars = [{
      colour: "Red",
      brand: "Mazda",
      doors: 5
  },
  {
      colour: "Black",
      brand: "Fiesta",
      doors: 3
  },
  {
    colour: "Violet",
    brand: "BMW",
    doors: 3
  }]
  }

}
