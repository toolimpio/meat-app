import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "app/restaurant-detail/menu/menu.component";
import { RewiewsComponent } from "app/restaurant-detail/rewiews/rewiews.component";
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from "app/order-summary/order-summary.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: RewiewsComponent}
    ]
  },
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', component: AboutComponent}
]
