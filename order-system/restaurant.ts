import { Customer } from './customer'

export class Restaurant {
  public enter(customer: Customer) {
    customer.order()
  }

  public save(money) {
    // ...
  }
}
