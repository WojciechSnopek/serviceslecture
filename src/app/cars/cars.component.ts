import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

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
