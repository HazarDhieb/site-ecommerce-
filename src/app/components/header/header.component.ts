import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public cartService: CartService,
  ){}

  // ngOnInit() {
  //   this.cartService.getCart();
  // }
}
