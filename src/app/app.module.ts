import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService){
  return() =>
  keycloak.init({
    config:{
      url:'http://localhost:8080/auth',
      realm: 'TeamOne',
      clientId: 'TeamOne'
    },
    initOptions:{
      checkLoginIframe: false
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
