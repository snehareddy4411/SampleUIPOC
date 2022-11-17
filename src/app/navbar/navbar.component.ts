import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { CartService } from '../cart/cart.service';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string= '';
  role: string= '';
  cartLength = 0;
  //isNavbarVisible = false;
  userLoggedIn = false;

  constructor(protected readonly keycloak: KeycloakService, 
    private cartService:CartService,
    private authGuardService: AuthGuard,
    private router:Router) 
  {
    this.cartService.cartlength$.subscribe( updatedNumber => {
      this.cartLength = updatedNumber
    });
  }

  ngOnInit(): void {
    this.cartService.cartlength$.next(this.cartLength);
    this.authGuardService.variableChange
      .subscribe(res=>{
          console.log(res); 
          if (res['IsLoggedIn']){
            this.userLoggedIn = true;
            //this.isNavbarVisible = true;
            this.username = res['UserName'];
            this.role = res['Role']
          }else{
            this.userLoggedIn = false;
            //this.isNavbarVisible = false;
            this.username = '';
            this.role = '';
          }
      });
  }

  public logout() {
    this.keycloak.logout();
  }

}