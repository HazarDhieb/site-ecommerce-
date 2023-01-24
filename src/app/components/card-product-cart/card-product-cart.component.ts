import { Component,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-card-product-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrls: ['./card-product-cart.component.css']
})
export class CardProductCartComponent {
  url!: string;
  constructor(
    public cartService: CartService,
    public cart: CartComponent, 
    private router:Router
    ){
  }
  @Input() cartProduct! : CartProduct;
  @Input() index! : number;

  ngOnInit(){
    this.getUrl();
  }
  removeProduct(){
    console.log("hello")
    this.cart.removeProduct(this.index);
  }
  getUrl(){
    if( this.router.url.includes('cart'))
    {
      this.url='cart';
    }
    else if( this.router.url.includes('payment'))
    {

      this.url='payment';
    }
    else if( this.router.url.includes('delivery'))
    {

      this.url='delivery';
    }
  }

  }

