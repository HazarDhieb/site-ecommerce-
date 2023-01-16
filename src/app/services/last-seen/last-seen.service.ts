import { Injectable } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';


@Injectable({
  providedIn: 'root'
})
export class LastSeenService {

  constructor() { }

  private createSeenList(){
    const newList : Product[] = [];
    const newListString = JSON.stringify(newList);
    localStorage.setItem('list',newListString);
  }

  private saveSeenList(list: Product[]){
    localStorage.setItem('list', JSON.stringify(list)); 
  }

  getSeenList(){
    const list = localStorage.getItem('list')
    if (list){
      return JSON.parse(list);
    } else {
      this.createSeenList();
      this.getSeenList();
    }
  }

  addProductToList(listItem: Product){
    const list = this.getSeenList();
    list.push(listItem);
    this.saveSeenList(list);
  }

  removeProductFromlist (listItem : Product){
    const list = this.getSeenList();
    const foundProduct = list.find((product: Product)=> product.id === listItem.id );
    if(foundProduct){
      const index = list.indexOf(foundProduct);
      list.splice(index,1);
    }
    this.saveSeenList(list);
  }
}
