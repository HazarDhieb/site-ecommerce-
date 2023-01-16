import { Component } from '@angular/core';
import { CartService } from './services/cart/cart.service';
import { LastSeenService } from './services/last-seen/last-seen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etnika';
  constructor(
    private cartService: CartService,
    private lastSeenService: LastSeenService
  ){}
  
  ngOnInit(){
    this.cartService.initCart();
    this.lastSeenService.getSeenList();
  }
}
