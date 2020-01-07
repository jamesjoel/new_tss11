import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.interface';


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
  addEmployee(obj:Employee) {
    return this._http.post<any>("http://localhost:3000/employees", obj);
  }


}
