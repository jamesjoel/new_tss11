import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private router : Router) { }

  goLogin(obj){
    return this._http.post<any>("http://localhost:3000/api/login",obj);
  }

  getToken(){
    return localStorage.getItem("tokenKey");
  }

  logout(){
    localStorage.removeItem("tokenKey");
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    if(localStorage.getItem("tokenKey")){
      return true;
    }else{
      return false;
    }
  }


}
