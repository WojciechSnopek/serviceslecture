import { CarsService } from './../core/services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  public cars$: Observable<Array<Car>>; //strumien

  constructor(private readonly carsService: CarsService) {}

  public refreshValuesAfterDelete() {
    this.carsService.getCars();
  }

  ngOnInit(): void {
    this.cars$ = this.carsService.cars$;
    this.refreshValuesAfterDelete();
  }
}
