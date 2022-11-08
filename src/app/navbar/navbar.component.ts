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
  cartlength: number = 0;

  constructor(protected readonly keycloak: KeycloakService, private authService:AuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartLength().subscribe((data) =>
    {
      this.cartlength = data;
      console.log(this.cartlength)
    })
    this.username = this.authService.getUserNameRole().userName;
    this.role = this.authService.getUserNameRole().role;
  }
  public logout() {
    this.keycloak.logout();
  }
}


