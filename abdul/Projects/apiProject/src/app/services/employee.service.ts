import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _http : HttpClient) { }

  getAllEmployees(){
    return this._http.get("http://localhost:3000/employees");
    // return "hi";
  }

  updateEmployee(){

  }

  addEmployee(obj){
    return this._http.post<any>("http://localhost:3000/employees",obj);
  }

  deleteEmployee(){
    
  }
}
