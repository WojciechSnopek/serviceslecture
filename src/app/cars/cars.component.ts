import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ApiCarsService } from '../core/services/api-cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public cars: Array<Car>;

  constructor(private readonly carsService: ApiCarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((x) => {
      console.log(x);
      this.cars = x;
      console.log(this.cars);
    });
  }
}
