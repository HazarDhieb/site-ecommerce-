import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BUTTON } from 'src/app/mocks/buttons.mock';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product? : Product;
  buttonInfo = BUTTON[1];
  sameProducts!:Product[] | undefined;
  fourSameProducts: Product[] = [];

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router){} // activatedRoute pour récupéerer l'id

  ngOnInit(){
    this.getProduct();
    this.getSameCategoryProducts();
    this.getFourSameCatProducts(this.getSameCategoryProducts())
    if(this.product){
      console.log("product",this.product);
    }
    console.log(this.fourSameProducts);
  }
  // Fonction pour vérifier l'existence du produit, sinon 404;
  getProduct(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    foundProduct ? this.product = foundProduct : this.router.navigate(['/not-found']);
  }

  getSameCategoryProducts() : Product[] | undefined{
    if(this.product){
      this.sameProducts = this.productService.getProductsByCategoryId(this.product.categoryId);
      // console.log("dans la même catégorie",this.sameProducts);
    }
    return this.sameProducts;
  }
  getFourSameCatProducts(sameProducts: Product[] | undefined){
    for(let i=0; i<4; i++){
      this.fourSameProducts.push(sameProducts![i]);
    }
    return this.fourSameProducts;
  }
}
