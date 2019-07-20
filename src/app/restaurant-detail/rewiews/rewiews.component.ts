import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/observable";

import { RestaurantsService } from "app/restaurants/restaurants.service";

@Component({
  selector: 'mt-rewiews',
  templateUrl: './rewiews.component.html'
})
export class RewiewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
