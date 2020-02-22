import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adv } from '../models/adv';

@Injectable({
  providedIn: 'root'
})
export class AdvLoginService {

  constructor(
    private _http : HttpClient
  ) { }


  doLogin(obj:Adv){
    return this._http.post<any>("http://localhost:3000/")
  }
}
