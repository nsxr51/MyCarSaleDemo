import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-car-bid-page',
  templateUrl: './car-bid-page.component.html',
  styleUrls: ['./car-bid-page.component.css']
})
export class CarBidPageComponent implements OnInit ,AfterViewChecked{

  constructor(private route: ActivatedRoute) { }
  id: number;
  private sub: any;
  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
  ngAfterViewChecked() {
    $('.mu-navbar').addClass('mu-nav-show');
}
}
