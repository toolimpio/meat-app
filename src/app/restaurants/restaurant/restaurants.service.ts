import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

import { MEAT_API } from "app/app.api"
import { Restaurant } from "app/restaurants/restaurant/restaurant.model"
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
