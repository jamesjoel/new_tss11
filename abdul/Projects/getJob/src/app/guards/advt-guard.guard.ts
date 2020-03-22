import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdvtGuardGuard implements CanActivate {

  constructor(private loginServ : LoginService, private router : Router){}
  canActivate(){
    if(this.loginServ.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(["/adv/login"]);
      return false;
    }
  }
  
}
