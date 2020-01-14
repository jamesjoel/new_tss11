import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http : HttpClient) { }

  getAllStudent(){
    return this._http.get<any>("http://localhost:3000/students");
  }

  addStudent(obj:Students){
    return this._http.post<any>("http://localhost:3000/students",obj);
  }

  updateStudent(obj:Students){
    return this._http.put<any>("http://localhost:3000/students/"+obj.id,obj);
  }

  deleteStudent(obj:Students){
    return this._http.delete<any>("http://localhost:3000/students/"+obj.id)
  }

  emptyObjects(){
    return {
      full_name : "",
      email : "",
      phone : null,
      city : "",
      gender : "",
      color : false
    }
  }
}
