import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { PaymentsComponent } from './components/payments/payments.component';
import { GaranteesComponent } from './components/garantees/garantees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModuleTsModule } from './modules/angular-material.module.ts/angular-material.module.ts.module';
import { PayementTotalComponent } from './components/payement-total/payement-total.component';
import { BarProgressComponent } from './components/bar-progress/bar-progress.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    PaymentsComponent,
    GaranteesComponent,
    PayementTotalComponent,
    BarProgressComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModuleTsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
