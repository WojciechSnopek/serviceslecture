import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ApiCarsService } from '../core/services/api-cars.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public cars: Array<Car>;

  constructor(private readonly carsService: ApiCarsService) {}

  public refreshValuesAfterDelete() {
    this.carsService.getCars().subscribe((car) => {
      this.cars = car;
    });
  }

  ngOnInit(): void {
    this.carsService
      .getCars()
      .pipe(
        tap((cars) => {
          console.log(cars);
        })
      )
      .subscribe((car) => {
        this.cars = car;
      });
  }
}
