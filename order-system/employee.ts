import { Chief } from './chief'
import { Restaurant } from './restaurant'

export class Employee {
  private chief: Chief
  private restaurant: Restaurant

  public takeOrder() {
    return this.chief.cook()
  }

  public receive(money) {
    this.restaurant.save(money)
  }
}
