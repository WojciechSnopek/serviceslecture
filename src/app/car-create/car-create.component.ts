import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss'],
})
export class CarCreateComponent implements OnInit {
  public carForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {} //constructor jest obslugiwany przez js

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      colour: this.formBuilder.control(null),
      brand: this.formBuilder.control(null),
      doors: this.formBuilder.control(null),
    });
  } //hooki sa obslugiwane przez angulara

  public save(): void {
    if (this.carForm.valid) {
      console.log(this.carForm.value);
    } else {
      console.log('dupa');
    }
  }
}
