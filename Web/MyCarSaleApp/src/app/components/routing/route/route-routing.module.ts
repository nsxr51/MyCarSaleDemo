import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from '../../view/main-view/main-view.component';
import { CarBidPageComponent } from '../../cars-components/car-bid-page/car-bid-page.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main',component: MainViewComponent }
  ,{path: 'carbidpage/:id', component: CarBidPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RouteRoutingModule { }
