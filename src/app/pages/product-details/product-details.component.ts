import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product? : Product;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router){} // activatedRoute pour récupéerer l'id

  ngOnInit(){
    this.getProduct();
    console.log("product"+this.product);
  }
  // Fonction pour vérifier l'existence du produit, sinon 404;
  getProduct(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    foundProduct ? this.product = foundProduct : this.router.navigate(['/not-found']);
  }
}
