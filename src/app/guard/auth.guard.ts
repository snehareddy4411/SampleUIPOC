import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  variableChange=new Subject<any>();
  role: string;

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
      console.log(userDetails.username);
      this.role = userDetails['attributes'].Role;
      let userCache = {'UserName': userDetails.username, 'Role': userDetails['attributes'].Role,
      'IsLoggedIn': this.authenticated};
      this.variableChange.next(userCache);
    }

    return this.authenticated;
  }
}