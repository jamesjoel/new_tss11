import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AdvLoginService } from '../services/adv-login.service';


@Injectable({
  providedIn: 'root'
})
export class AdvGuardGuard implements CanActivate {
  constructor(
    private _router : Router,
    private _advLogin : AdvLoginService
  ) {

  }
  canActivate(){
    if(this._advLogin.isLoggedIn()){
      return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
