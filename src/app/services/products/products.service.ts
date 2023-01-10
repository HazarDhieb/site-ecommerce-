import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Retourne la liste de tous les produits
  getProducts() : Product[] {
    return PRODUCTS;
  }

  getProductsByCategoryId(categoryId: number) : Product[] | undefined {
    const products = PRODUCTS.filter(product => product.categoryId === categoryId);
    return products;
  }

  // Retourne un seul produit dont l'id correspont à l'id recherché
  getProductById(id: number) : Product | undefined {
    const product = PRODUCTS.find(product => product.id === id);
    return product;
  }
}
