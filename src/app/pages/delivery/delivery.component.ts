import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  cart: CartProduct[] = [];
  actionDescription: string = "Payer la commande"
  deliveryChoice!: string;
  constructor(public cartService: CartService,
    private router: Router){
  }

  ngOnInit(){
    this.getCart();
    if(this.cartService.productQuantity === 0){
      this.router.navigate(['/cart']);
    }
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

  removeProduct(index: number){
    this.cartService.removeProductFromCart(index);
    this.getCart();
  }

  validateDelivery = () => {
    this.router.navigate(['/payment']);
  }

  getDeliveryChoice(choice:string){
    this.deliveryChoice = choice;
    // console.log(this.deliveryChoice);
  }
}
