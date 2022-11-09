import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName : string = '';
  private role : string = '';

  getUserNameRole()
  {
    debugger;
    this.userName = localStorage.getItem('UserName');
    this.role = localStorage.getItem('Role');
    return {userName : this.userName,role: this.role }
  }
}
