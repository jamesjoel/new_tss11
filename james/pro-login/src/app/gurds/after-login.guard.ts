import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {
  constructor(private _router : Router, private _loginService : LoginService) { }
  
  canActivate() { // login, signup
    if(this._loginService.isLoggedIn()==true) {
      this._router.navigate(["/profile"]);
      return false;
    }  
    else {
      return true;
    }
  }
  
}
