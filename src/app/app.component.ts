import { Component } from '@angular/core';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etnika';
  constructor(
    private cartService: CartService
  ){}
  
  ngOnInit(){
    this.cartService.initCart();
  }
}
