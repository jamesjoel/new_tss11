import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  doLogin(obj: any) {
    return this._http.post<any>("http://localhost:3000/api/admin/login", obj);
  }
  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);

  }
}













