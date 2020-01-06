import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getEmployee() {
    return this._http.get<any>("http://localhost:3000/employees")

  }
  updateEmployee() {

  }
  deleteEmployee() {

  }
  addEmployee() {

  }


}
