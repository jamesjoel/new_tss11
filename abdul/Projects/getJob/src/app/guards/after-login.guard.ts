import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {
  constructor(private logServe : LoginService, private router : Router){}
  canActivate(){
    if(this.logServe.isLoggedIn()){
      this.router.navigate(["/dashboard"]);
      return false;
    } else{
      return true;
    }
  }
  
}
