import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCarsService } from '../core/services/api-cars.service';
import { CarsService } from '../core/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss'],
})
export class CarCreateComponent implements OnInit {
  public carForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly apiCarsService: ApiCarsService,
    private readonly carsService: CarsService,
    private readonly route: Router
  ) {} //constructor jest obslugiwany przez js

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      colour: this.formBuilder.control(null, Validators.required),
      brand: this.formBuilder.control(null, Validators.required),
      doors: this.formBuilder.control(null, Validators.required),
    });
  } //hooki sa obslugiwane przez angulara

  public save(): void {
    if (this.carForm.valid) {
      this.apiCarsService
        .postCar(this.carForm.value)
        .subscribe(() => this.route.navigateByUrl('/cars'));
    } else {
      console.log('zły formularz');
    }
  }
}
