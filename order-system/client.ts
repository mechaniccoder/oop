import { Customer } from './customer'
import { Restaurant } from './restaurant'

function startRestaurant() {
  const restaurant = new Restaurant()
  restaurant.enter(new Customer())
}
