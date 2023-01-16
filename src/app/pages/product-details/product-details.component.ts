import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BUTTON } from 'src/app/mocks/buttons.mock';
import { Product } from 'src/app/mocks/products.mock';
import { LastSeenService } from 'src/app/services/last-seen/last-seen.service';
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
  lastSeenProducts! : Product[];
  fiveLastProducts: Product[] = [];
  index!: number;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private lastSeenService: LastSeenService,
    private router: Router){} // activatedRoute pour récupéerer l'id

    
    ngOnInit(){
      this.getProduct();
      // this.getLastSeen();
      console.log(this.getFiveLastSeen(this.getLastSeen()));
      if(this.product){
      console.log("product",this.product);
      this.lastSeenService.removeProductFromlist(this.product);
      this.getLastSeen();
    }
    console.log(this.fourSameProducts);
    
  }
  
  ngOnDestroy() {
    if(this.product){
      this.lastSeenService.addProductToList(this.product);
    }
  }
  // Fonction pour vérifier l'existence du produit, sinon 404;
  getProduct(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    foundProduct ? this.product = foundProduct : this.router.navigate(['/not-found']);
  }
  getLastSeen(){
   this.lastSeenProducts = this.lastSeenService.getSeenList();
   return this.lastSeenProducts;
  } 

  getFiveLastSeen(lastSeenProducts: Product[]){
    for(let i=lastSeenProducts.length; i<4; i--){
      this.fiveLastProducts.push(lastSeenProducts[i]);
    }
    return this.fiveLastProducts;
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
