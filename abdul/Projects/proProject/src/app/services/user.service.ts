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
  
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/Users")
    .pipe(catchError(this.errorHandler));
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
