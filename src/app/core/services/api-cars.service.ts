import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/car.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCarsService {
  constructor(private readonly httpClient: HttpClient) {}

  public getCars(): Observable<Array<Car>> {
    return this.httpClient.get<Array<Car>>('http://localhost:3000/cars');
  }
  public deleteCar(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/cars/${id}`);
  }
  public postCar(car: Car): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/cars', car);
  }
}
