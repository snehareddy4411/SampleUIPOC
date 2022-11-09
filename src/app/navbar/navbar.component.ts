import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string= '';
  role: string= '';
  cartLength = 0;

  constructor(protected readonly keycloak: KeycloakService, private authService:AuthService,private cartService:CartService) 
  {
    this.cartService.cartlength$.subscribe( updatedNumber => {
      this.cartLength = updatedNumber
    });
  }

  ngOnInit(): void {
    this.cartService.cartlength$.next(this.cartLength);
    this.username = this.authService.getUserNameRole().userName;
    this.role = this.authService.getUserNameRole().role;
  }

  public logout() {
    this.keycloak.logout();
  }

  
}


