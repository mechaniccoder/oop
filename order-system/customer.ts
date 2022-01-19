import { Employee } from './employee'

export class Customer {
  private employee: Employee

  public order() {
    const food = this.employee.takeOrder()
    this.eat(food)
    this.pay('1 dollars')
  }

  private eat(food) {
    //...
  }

  private pay(money) {
    this.employee.receive(money)
  }
}
