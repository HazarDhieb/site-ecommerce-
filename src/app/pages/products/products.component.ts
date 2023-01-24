import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Country } from 'src/app/mocks/categories.mock';
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
  countries! : Country [];

  productsNumber: number = 0;
  
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
    this.productsNumber = this.products.length;
  }

  getCategory(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("l'id de la page est:",id);
    const foundCategory = this.categoryService.getCategoryById(id);
    if(foundCategory){
      this.category = foundCategory;
      this.countries = this.category.countries;
      console.log(this.countries)
    }else {
      this.router.navigate(['/not-found'])
    }
  }
}
