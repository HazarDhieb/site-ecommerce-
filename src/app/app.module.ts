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
import { ButtonComponent } from './components/button/button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { CardProductCartComponent } from './components/card-product-cart/card-product-cart.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
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
    BarProgressComponent,
    ButtonComponent,
    ProductCardComponent,
    PaymentSuccessComponent,
    NewsletterComponent,
    ReviewCardComponent,
    ProductDescriptionComponent,
    CardProductCartComponent,
    DeliveryComponent,
    DeliveryFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModuleTsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CartComponent,PayementTotalComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
