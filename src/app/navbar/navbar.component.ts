import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string= '';
  role: string= '';

  constructor(protected readonly keycloak: KeycloakService, private authService:AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserNameRole().userName;
    this.role = this.authService.getUserNameRole().role;
  }
  public logout() {
    this.keycloak.logout();
  }
}


