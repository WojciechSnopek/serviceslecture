import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.model';
import { ApiCarsService } from '../core/services/api-cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() carDeleted = new EventEmitter<void>();

  constructor(private readonly carsService: ApiCarsService) {}

  public delete(id) {
    this.carsService.deleteCar(id).subscribe();
    this.carDeleted.emit();
  }

  ngOnInit(): void {}
}
