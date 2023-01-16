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
  product?: Product;
  buttonInfo = BUTTON[1];
  lastSeenProducts!: Product[];
  index!: number;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private lastSeenService: LastSeenService,
    private router: Router) { } // activatedRoute pour récupéerer l'id


  ngOnInit() {
    this.getProduct();
    // this.getLastSeen();
    if (this.product) {
      console.log("product", this.product);
      this.lastSeenService.removeProductFromlist(this.product);
      this.getLastSeen();
    }
  }

  ngOnDestroy() {
    if (this.product) {
      this.lastSeenService.addProductToList(this.product);
    }
  }
  // Fonction pour vérifier l'existence du produit, sinon 404;
  getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);
    foundProduct ? this.product = foundProduct : this.router.navigate(['/not-found']);
  }
  getLastSeen() {
    this.lastSeenProducts = this.lastSeenService.getSeenList();
  }


}
