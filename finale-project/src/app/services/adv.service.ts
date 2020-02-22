import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adv } from '../models/adv';

@Injectable({
  providedIn: 'root'
})
export class AdvService {
  APIUrl = "http://localhost:3000/api/";
  constructor(
    private _http : HttpClient
  ) { }

  signupAdv(obj:Adv){
    return this._http.post<any>(this.APIUrl+"adv/signup", obj);
  }
  demo(){
    return this._http.get<any>(this.APIUrl+"adv/demo");
  }
}
