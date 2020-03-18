import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {

  itens: CartItem[] = []

  addItem(item: MenuItem) {

    let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)

    if(foundItem) {
      foundItem.quantity = foundItem.quantity + 1
    } else {
      this.itens.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem) {
    this.itens.splice(this.itens.indexOf(item), 1)
  }

  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }

  clear() {
    this.itens = []
  }
}
