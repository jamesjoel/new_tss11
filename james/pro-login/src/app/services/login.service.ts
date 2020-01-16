import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) { }

  doLogin(obj) {
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }

  getToken() {
    return localStorage.getItem("loginToken");
  }
  isLoggedIn() {
    if(localStorage.getItem("loginToken")) {
      return true;
    }
    else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem("loginToken");
    this._router.navigate(["/login"]);
  }


  getUser() {
    return this._http.get<any>("http://localhost:3000/api/getuser",{
      headers : { Authorization : this.getToken()}
    });
  }


}
