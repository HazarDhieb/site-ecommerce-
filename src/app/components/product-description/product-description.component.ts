import { Component, Input } from '@angular/core';
import { BUTTON, Button } from 'src/app/mocks/buttons.mock';
import { Color, Product } from 'src/app/mocks/products.mock';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  @Input() product! :  Product;
  buttonInfo = BUTTON[0];
  colors: Color[] = [];

  ngOnInit(){
    this.colors = this.product.colors;
  }
}
