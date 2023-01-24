import { Component, Input } from '@angular/core';
import { BUTTON, Button } from 'src/app/mocks/buttons.mock';
import { Color, Product } from 'src/app/mocks/products.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  @Input() product! :  Product;
  quantity: number = 1;
  buttonInfo = BUTTON[0];
  colors: Color[] = [];

  constructor(
    private cartService: CartService
  ){}
  ngOnInit(){
    this.colors = this.product.colors;
  }

  addToCart(){
    if (!this.product) return;
    
    const cartProduct: CartProduct = {
      product: this.product!,
      quantity: this.quantity
    }
    this.cartService.addProductToCart(cartProduct);
  }
}
