import { Car } from 'src/app/car.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, pipe } from 'rxjs';
import { ApiCarsService } from './api-cars.service';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private subject: Subject<Array<Car>> = new Subject<Array<Car>>();
  public cars$: Observable<Array<Car>> = this.subject.asObservable();

  constructor(private readonly apiCarsService: ApiCarsService) {}

  public getCars = () => {
    this.apiCarsService.getCars().subscribe((cars) => this.subject.next(cars));
  };
}
