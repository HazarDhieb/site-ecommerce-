import { Injectable } from '@angular/core';
import { CATEGORIES, Category } from 'src/app/mocks/categories.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() : Category[]{
    return CATEGORIES;
  }
}
