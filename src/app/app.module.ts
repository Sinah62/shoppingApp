import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MyFirstAppComponent } from './components/my-first-app/my-first-app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductListComponent } from './components/my-first-app/product-list/product-list.component';
import { FiltersComponent } from './components/my-first-app/filters/filters.component';
import { CartComponent } from './components/my-first-app/cart/cart.component';
import { CartItemsComponent } from './components/my-first-app/cart/cart-items/cart-items.component';
import { ProductItemComponent } from './components/my-first-app/product-list/product-item/product-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyFirstAppComponent,
    NavComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    CartItemsComponent,
    ProductItemComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
