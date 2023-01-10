import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/mocks/categories.mock';
import { Product } from 'src/app/mocks/products.mock';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  category!: Category;

  constructor(private productService: ProductsService,
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    this.getProducts();
    this.getCategory();
    // console.log("THIS PRODUCTS"+this.products);
  }
  getProducts(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProducts = this.productService.getProductsByCategoryId(id);
    foundProducts ? this.products = foundProducts : this.router.navigate(['/not-found']);
  }

  getCategory(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("l'id de la page est:",id);
    const foundCategory = this.categoryService.getCategoryById(id);
    foundCategory ? this.category = foundCategory : this.router.navigate(['/not-found']);
  }
}
