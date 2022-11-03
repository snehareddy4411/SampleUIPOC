import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from './products/products.module';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    CartComponent,
=======
>>>>>>> b4e8c72ba48560e8b282ce50fb5d91e8927f64fb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
