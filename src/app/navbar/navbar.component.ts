import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected readonly keycloak: KeycloakService) { }

  ngOnInit(): void {
  }
  public logout() {
    this.keycloak.logout();
  }
}


