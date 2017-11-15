import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarCardPropertyComponent } from './components/cars-components/car-card-property/car-card-property.component';
import { HeadNavBarComponent } from './components/view/head-nav-bar/head-nav-bar.component';
import { AboutUsComponent } from './components/view/about-us/about-us.component';
import { HowItWorksComponent } from './components/view/how-it-works/how-it-works.component';
import { CarListComponent } from './components/view/car-list/car-list.component';
import { MainViewComponent } from './components/view/main-view/main-view.component';
import { RouteModule } from './components/routing/route/route.module';
import { RouteRoutingModule } from './components/routing/route/route-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { CarBidPageComponent } from './components/cars-components/car-bid-page/car-bid-page.component';
import { HttpServiceService } from './services/http-service.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    CarCardPropertyComponent,
    HeadNavBarComponent,
    AboutUsComponent,
    HowItWorksComponent,
    CarListComponent,
    MainViewComponent,
    CarBidPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouteRoutingModule,
    RouterModule,
    DataTableModule,
    SharedModule,GalleriaModule
  ],
  providers: [MainViewComponent,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
