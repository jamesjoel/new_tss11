import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl : any = "http://localhost:4000/api/admin"

  constructor(private http: HttpClient, private router : Router) { }

  doLogin(obj:any){
    return this.http.post<any>(this.apiUrl+"/signin", obj);
  }

  doSignup(obj:any){
    return this.http.post<any>(this.apiUrl+"/signup", obj);
  }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

  getToken(){
    return localStorage.getItem("token");
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate([""]);
  }
}
