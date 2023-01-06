import { Component,Input } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-card-product-cart',
  templateUrl: './card-product-cart.component.html',
  styleUrls: ['./card-product-cart.component.css']
})
export class CardProductCartComponent {
  @Input() product! : Product;

}
