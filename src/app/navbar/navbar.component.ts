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
  lengthOfCart : number = 0;

  constructor(protected readonly keycloak: KeycloakService, private authService:AuthService,private cartService:CartService) 
  {
    this.cartService.getCart().subscribe( (data) =>{
      this.lengthOfCart = data.length;
    }); 
  }

  ngOnInit(): void {
    this.cartService.lengthOfCart$.subscribe( lengthOfCart => {
      this.lengthOfCart = lengthOfCart;
    });
    this.username = this.authService.getUserNameRole().userName;
    this.role = this.authService.getUserNameRole().role;
  }

  public logout() {
    localStorage.removeItem('Username');
    this.keycloak.logout();
  }

  
}


