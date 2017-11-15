import { Component, OnInit } from '@angular/core';
import { CarProerty } from '../../cars-components/car-card-property/CarProerty';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private cars:CarProerty[];
  constructor(private carService:HttpServiceService) { 
    this.cars=this.carService.getRecommendedCars();
  }

  ngOnInit() {
  }

}
