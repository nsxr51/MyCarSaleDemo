import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CarCardPropertyComponent } from './components/cars-components/car-card-property/car-card-property.component';
import { HeadNavBarComponent } from './components/view/head-nav-bar/head-nav-bar.component';
import { AboutUsComponent } from './components/view/about-us/about-us.component';
import { HowItWorksComponent } from './components/view/how-it-works/how-it-works.component';
import { CarListComponent } from './components/view/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardPropertyComponent,
    HeadNavBarComponent,
    AboutUsComponent,
    HowItWorksComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
