import { Component, OnInit } from '@angular/core';
import { CarProerty } from '../../cars-components/car-card-property/CarProerty';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private cars:CarProerty[];
  constructor() { 
    this.cars=[
      {
      modelName:"רנו קפצו'ר",modelYear:2014,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/reno.jpg",id:"1"
      },      {
      modelName:"קאיה ספורטאג",modelYear:2013,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/sportage.jpg",id:"2"
      },      {
      modelName:"יונדאי i30",modelYear:2012,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/I30.jpg",id:"3"
      },      {
      modelName:"יונדאי i20",modelYear:2010,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/i20.jpg",id:"4"
      },      {
       modelName:"סקודה ראפיד",modelYear:2011,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/rapid.jpg",id:"5"
      },      {
      modelName:"קאיה ריו",modelYear:2001,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/rio.jpg",id:"6"
      }]
  }

  ngOnInit() {
  }

}
