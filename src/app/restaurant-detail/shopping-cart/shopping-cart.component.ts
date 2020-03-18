import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() { }

  itens(): any[] {
    return this.shoppingCartService.itens
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  clear() {
    this.shoppingCartService.clear()
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
