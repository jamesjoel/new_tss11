import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  
  getAllUsers(id=null):Observable<User[]>{
    if(id!=null){
      return this.http.get<User[]>("http://localhost:3000/Users/"+id);
    }else{
      return this.http.get<User[]>("http://localhost:3000/Users");
    }
  }

  addUser(obj:User){
    return this.http.post<User[]>("http://localhost:3000/Users",obj);
  }

  deleteUser(obj:User){
    return this.http.delete<User[]>("http://localhost:3000/Users/"+obj.id);
  }

  updateUser(id, obj:User){
    return this.http.put<User[]>("http://localhost:3000/Users/"+id,obj);
  }

  errorHandler(error : HttpErrorResponse){
    console.log("console server error");
    return throwError(error);
  }

  emptyObj(){
    return {
      id : null,
      name : "",
      age : null,
      city : ""
    }
  }
}
