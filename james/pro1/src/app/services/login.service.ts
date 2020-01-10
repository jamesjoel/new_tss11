import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) { }

  login(obj:Login) {
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }
  isLoggedIn() {
    if(localStorage.token){
      return true;
    }
    else{
      return false;
    }
  }
  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }


}
