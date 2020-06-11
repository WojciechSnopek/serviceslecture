import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarCreateComponent } from './car-create/car-create.component';

const routes: Routes = [
  {
    path: 'cars',
    component: CarsComponent,
  },
  {
    path: 'create',
    component: CarCreateComponent,
  },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
