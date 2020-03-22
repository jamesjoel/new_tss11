import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  apiUrl = "http://localhost:3000/api/advt";

  constructor(private http : HttpClient) { }

  updateUser(id:string,obj:any){
    console.log(obj);
    return this.http.post<any>(this.apiUrl+"/update/"+id,obj,{
      headers : { Authorization : localStorage.getItem("token") }
    });
  }
}
