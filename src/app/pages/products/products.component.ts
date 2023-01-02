import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    this.getProducts();
    // console.log("THIS PRODUCTS"+this.products);
  }
  getProducts(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProducts = this.productService.getProductsByCategoryId(id);
    foundProducts ? this.products = foundProducts : this.router.navigate(['/not-found']);
  }
}
