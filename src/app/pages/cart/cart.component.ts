import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  actionDescription: string = "Valider le panier";

  boundedValidateCart = this.validateCart.bind(this);

  cart: CartProduct[] = [];
  constructor(public cartService: CartService,
    private router: Router){
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

  validateCart () {
    console.log("panier validé");
    this.router.navigate(['/delivery']);
  }
}
