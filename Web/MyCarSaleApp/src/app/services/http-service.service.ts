import { Injectable } from '@angular/core';
import { CarProerty } from '../components/cars-components/car-card-property/CarProerty';

@Injectable()
export class HttpServiceService {
private RecommendedCars:CarProerty[];
private carSelectes:CarProerty;
constructor() { 
  this.RecommendedCars=[
    {
    modelName:"רנו קפצו'ר",modelYear:2014,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/reno.jpg",id:1,properties:[
      {name:"יצרן",value:"רנו"},
      {name:"דגם",value:"קפצור"},
      {name:"נפח מנוע",value:"1400"},
      {name:"שנה",value:"2015"},
      {name:"ת. הילוכים",value:"ידני"},
      {name:"יד",value:"2"},
      {name:"בעלות",value:"פרטית"},
      {name:"קילומטרז",value:25000},]
    },      {
    modelName:"קאיה ספורטאג",modelYear:2013,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/sportage.jpg",id:2,properties:[
      {name:"יצרן",value:5000},
      {name:"דגם",value:""},
      {name:"נפח מנוע",value:""},
      {name:"שנה",value:""},
      {name:"ת. הילוכים",value:""},
      {name:"יד",value:""},
      {name:"בעלות",value:""},
      {name:"קילומטרז",value:""},]
    },      {
    modelName:"יונדאי i30",modelYear:2012,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/I30.jpg",id:3,properties:[
      {name:"יצרן",value:5000},
      {name:"דגם",value:""},
      {name:"נפח מנוע",value:""},
      {name:"שנה",value:""},
      {name:"ת. הילוכים",value:""},
      {name:"יד",value:""},
      {name:"בעלות",value:""},
      {name:"קילומטרז",value:""},]
    },      {
    modelName:"יונדאי i20",modelYear:2010,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/i20.jpg",id:4,properties:[
      {name:"יצרן",value:5000},
      {name:"דגם",value:""},
      {name:"נפח מנוע",value:""},
      {name:"שנה",value:""},
      {name:"ת. הילוכים",value:""},
      {name:"יד",value:""},
      {name:"בעלות",value:""},
      {name:"קילומטרז",value:""},]
    },      {
     modelName:"סקודה ראפיד",modelYear:2011,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/rapid.jpg",id:5,properties:[
      {name:"יצרן",value:5000},
      {name:"דגם",value:""},
      {name:"נפח מנוע",value:""},
      {name:"שנה",value:""},
      {name:"ת. הילוכים",value:""},
      {name:"יד",value:""},
      {name:"בעלות",value:""},
      {name:"קילומטרז",value:""},]
    },      {
    modelName:"קאיה ריו",modelYear:2001,listPrice:55000,currenBid:47000,lowPrice:40000,imageName:"assets/images/rio.jpg",id:6,properties:[
      {name:"יצרן",value:5000},
      {name:"דגם",value:""},
      {name:"נפח מנוע",value:""},
      {name:"שנה",value:""},
      {name:"ת. הילוכים",value:""},
      {name:"יד",value:""},
      {name:"בעלות",value:""},
      {name:"קילומטרז",value:""},]
    }
  ];
}
 getRecommendedCars():CarProerty[]{
  return this.RecommendedCars;
 }

 getCarById(id:number):CarProerty{
  this.RecommendedCars.forEach((current)=>{
    if(current.id===id){
      this.carSelectes= current;
    }
  })
  return this.carSelectes;
 }
}
