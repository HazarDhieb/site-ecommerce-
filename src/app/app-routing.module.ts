import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"categories",
    component: CategoriesComponent
  },
  {
    path:"categories/:id",
    component: ProductsComponent
  },
  // {
  //   path:"products",
  //   component: ProductsComponent
  // },
  {
    path:"products/:id",
    component: ProductDetailsComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"delivery",
    component: DeliveryComponent
  },
  {
    path:"payment",
    component: PaymentComponent
  },
  {
    path:"payment-success",
    component: PaymentSuccessComponent
  },
  {
    path:"not-found",
    component: NotFoundComponent
  },
  // whitecard pour la 404
  {
    path:"**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
