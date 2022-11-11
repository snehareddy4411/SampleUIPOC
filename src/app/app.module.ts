import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ToastrModule } from 'ngx-toastr';

function initializeKeycloak(keycloak: KeycloakService){
  return() =>
  keycloak.init({
    config:{
      url:'http://localhost:8280/auth',
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    KeycloakAngularModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut:2000,
      positionClass: 'toast-bottom-right'
    })
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
