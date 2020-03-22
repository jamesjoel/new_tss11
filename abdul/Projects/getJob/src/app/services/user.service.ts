import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000/api/admin/";
  getToken  = localStorage.getItem("token");

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.apiUrl+"singleUser",{
      headers : { Authorization : this.getToken }
    });
  }

  updateUser(obj:any){
    return this.http.put<any>(this.apiUrl+"updateData",obj, {
      headers : { Authorization : this.getToken }
    });
  }
  
}


