import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudInterface } from '../models/stud.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http : HttpClient) { }

  getAllStudent(){
    return this._http.get<any>("http://localhost:3000/students");
  }

  addStudent(obj){
    return this._http.post<any>("http://localhost:3000/students/",obj)
  }

  updateStudent(obj){
    this._http.put<any>("http://localhost:3000/students/"+obj.id,obj);
  }

  deleteStudent(obj:StudInterface){
    return this._http.delete<any>("http://localhost:3000/students/"+obj.id)
  }

  emptyInterface(){
    return {
      first_name : "",
      last_name : "",
      email : "",
      city : "",
      phone : null
    }
  }
}
