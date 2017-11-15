import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { CarProerty } from '../car-card-property/CarProerty';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-car-bid-page',
  templateUrl: './car-bid-page.component.html',
  styleUrls: ['./car-bid-page.component.css']
})
export class CarBidPageComponent implements OnInit ,AfterViewChecked{

  constructor(private route: ActivatedRoute,private carService:HttpServiceService) { }
  id: number;
  private sub: any;
  private Car:CarProerty;
  images: any[];
  ngOnInit() {
    this.images = [];

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.Car=this.carService.getCarById(this.id);
      // In a real app: dispatch action to load the details here.
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:this.Car.imageName, alt:'Description for Image 1', title:'Title 1'});
   });
  }
  ngAfterViewChecked() {
    $('.mu-navbar').addClass('mu-nav-show');
}
}
