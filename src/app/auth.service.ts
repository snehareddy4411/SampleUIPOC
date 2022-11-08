import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName : string = '';
  private role : string = '';
  constructor() { }

  getUserNameRole()
  {
    this.userName = localStorage.getItem('UserName');
    this.role = localStorage.getItem('Role');
    console.log('Username :'+this.userName +' Role: '+this.role);
    return {userName : this.userName,role: this.role }
  }
}
