import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payement-total',
  templateUrl: './payement-total.component.html',
  styleUrls: ['./payement-total.component.css']
})
export class PayementTotalComponent {
  
  @Input() cbFunction!: () => void;
  // @Input() action?: () => void;
  @Input() actionTitle!:string;

  @Input() choice!:string;

  tva: number = 0;
  total: number = 0;
  url!: string;
  constructor(
    public cartService: CartService,
    private router: Router
  ){}
  ngOnInit(){
    console.log(this.cartService.getTotalPrice());
    this.getTotal(this.choice);
    this.getUrl();
  }

  getChoice(){
    // console.log(this.choice);
  }
  
  getTotal(choice: string){
    const totalPrice = this.cartService.totalPrice;
    this.tva = +(0.2*totalPrice).toFixed(2);
    if(choice!=="Gratuit"){
      this.total = +(totalPrice+this.tva+5.90).toFixed(2);
    } else if(choice === "Gratuit") {
      this.total = 
      +(totalPrice+this.tva).toFixed(2);
    }
    // console.log("hi");
    // console.log(this.router.url);
    // console.log(choice);
  }

  getUrl(){
    if(this.router.url.includes('cart'))
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
