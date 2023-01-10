import { Component } from '@angular/core';
import { Category } from 'src/app/mocks/categories.mock';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories : Category[] = [];
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(){
    this.categories = this.categoriesService.getCategories();
  }
}
