import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.css']
})
export class BarProgressComponent {
 
  constructor(private router: Router) {}
   url!:string;

  ngOnInit() {
    this.getUrl();
    
  } 
  getUrl(){
    if( this.router.url.includes('cart'))
    {
      this.url='cart';
    }
    else if( this.router.url.includes('payment'))
    {

      this.url='payment';
    }
    else if( this.router.url.includes('delivery'))
    {

      this.url='delivery';
    }
  }
  
  // getColor() {
  //   const step = this.step.VALID;
  //   if (step) {
  //   return 'red';
  //   } else {
  //   return 'gray';
  //   }
  //   }

  
}
