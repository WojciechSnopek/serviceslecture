import { Component } from '@angular/core';
import { ApiCarsService } from './core/services/api-cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services-lecture';

  constructor(service: ApiCarsService){
    
  }

}
