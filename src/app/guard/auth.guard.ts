import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    protected override router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }
  
  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }   
    if(this.authenticated){
      let userDetails = await this.keycloak.loadUserProfile();
      console.log(userDetails);
      console.log(userDetails['attributes'].Role);
      localStorage.setItem('UserName', userDetails.username);
      localStorage.setItem('Role', userDetails['attributes'].Role)
      //console.log(userDetails.attributes.role);
    }

    return this.authenticated;
  }
}