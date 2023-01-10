import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payement-total',
  templateUrl: './payement-total.component.html',
  styleUrls: ['./payement-total.component.css']
})
export class PayementTotalComponent {

  tva: number = 0;
  total: number = 0;
  url!: string;
  constructor(
    public cartService: CartService,
    private router: Router
  ){}
  ngOnInit(){
    console.log(this.cartService.getTotalPrice());
    this.getTotal();
    this.getUrl();
  }

  getTotal(){
    const totalPrice = this.cartService.totalPrice;
    this.tva = 0.2*totalPrice;
    this.total = totalPrice+this.tva;
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
