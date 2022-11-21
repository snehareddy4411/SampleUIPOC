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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    },
  });
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent
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
