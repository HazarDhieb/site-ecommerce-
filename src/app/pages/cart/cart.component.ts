import { Component } from '@angular/core';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

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
