import { Component, OnInit,Input } from '@angular/core';
import { CarProerty } from './CarProerty';

@Component({
  selector: 'app-car-card-property',
  templateUrl: './car-card-property.component.html',
  styleUrls: ['./car-card-property.component.css']
})
export class CarCardPropertyComponent implements OnInit {
  @Input() Car:CarProerty;
  constructor() { }
   
  ngOnInit() {
  }

}
