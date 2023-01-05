import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServicesComponent } from './components/services/services.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
@NgModule({
  declarations: [
    CategoryCardComponent,
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CartComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    PreFooterComponent,
    ProductsComponent,
    NotFoundComponent,
    BackButtonComponent,
    ServiceCardComponent,
    ServicesComponent,
    ButtonComponent,
    ProductCardComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
