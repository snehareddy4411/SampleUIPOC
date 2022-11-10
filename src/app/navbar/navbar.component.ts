import { Component, OnInit } from '@angular/core';
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
  isNavbarVisible = false;

  constructor(protected readonly keycloak: KeycloakService, 
    private cartService:CartService,
    private authGuardService: AuthGuard) 
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
            this.isNavbarVisible = true;
            this.username = res['UserName'];
            this.role = res['Role']
          }else{
            this.isNavbarVisible = false;
            this.username = '';
            this.role = '';
          }
      });
  }

  public logout() {
    this.keycloak.logout();
  }

  
}


