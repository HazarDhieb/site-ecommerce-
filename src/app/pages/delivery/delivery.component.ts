import { Component } from '@angular/core';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  cart: CartProduct[] = [];
  constructor(public cartService: CartService){
  }

  ngOnInit(){
    this.getCart();
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

  removeProduct(index: number){
    this.cartService.removeProductFromCart(index);
    this.getCart();
  }
}
