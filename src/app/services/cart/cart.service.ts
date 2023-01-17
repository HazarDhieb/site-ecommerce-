import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from '../products/products.service';

export interface CartProduct{
  product: Product;
  quantity:number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice:number = 0;
  productQuantity: number = 0;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  private createCart(){
    const newCart :  CartProduct[] = [];
    const newCarstString = JSON.stringify(newCart);
    localStorage.setItem('cart', newCarstString);
  }

  private saveCart(cart: CartProduct[]){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(){
    const cart = localStorage.getItem('cart')
    if (cart){
      return JSON.parse(cart);
    } else {
      this.createCart();
      this.getCart();
    }
  }

  addProductToCart(cartProduct: CartProduct){
    const cart = this.getCart();
        // On regarde si le produit existe
    const existingProduct = cart.find((product:CartProduct) => product.product.id === cartProduct.product.id);

    if(existingProduct){
      const cartProductId = cart.indexOf(existingProduct);
      cart[cartProductId].quantity += cartProduct.quantity;
    }
    else {
      cart.push(cartProduct);
    }
    this.saveCart(cart);
    this.getTotalQuantity();
    this.getTotalPrice();
    this.router.navigate(['/cart']);
  }

  removeProductFromCart (index:number){
    const cart = this.getCart();
    cart.splice(index,1);
    this.saveCart(cart);
    this.getTotalQuantity();
    this.getTotalPrice();
  }

  getTotalPrice() :void{
    const cart = this.getCart();
    //calcul prix total
    // accumulator = nouvelle valeur retournée à chaque tour de boucle, initialisée à 0
    const total = cart.reduce((accumulator:number, currentValue:CartProduct) => {
      // récupère produit directement dans le mock
      const product = this.productsService.getProductById(currentValue.product.id);
     // Si le produit n'existe pas, on le retourne
      if(!product) return accumulator;
      return accumulator + (currentValue.quantity * product?.price);
    },0);
    // On assigne la valeur du total à la propriété totalPrice
    this.totalPrice = total;
    console.log('tata');

  }

  // Fonction pour récupérer la qté
  getTotalQuantity():void {
    const cart = this.getCart();
    const total = cart.reduce((accumulator: number, currentValue: CartProduct) => {
      return accumulator += currentValue.quantity;
    },0);
    this.productQuantity = total;
  }

  resetCart(){
    this.createCart();
    this.getTotalPrice();
    this.getTotalQuantity();
  } 

  initCart(){
    this.getCart();
    this.getTotalQuantity();
    this.getTotalPrice();
  }
}
