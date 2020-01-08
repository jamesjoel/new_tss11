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
  updateEmployee(obj:Employee) {
    return this._http.put<any>("http://localhost:3000/employees/"+obj.id, obj);
  }
  deleteEmployee(obj:Employee) {
    return this._http.delete<any>("http://localhost:3000/employees/"+obj.id);
  }
  addEmployee(obj:Employee) {
    return this._http.post<any>("http://localhost:3000/employees", obj);
  }
  emptyEmployee() {
    return { 
      first_name : "",
      last_name : "",
      email : ""
    }
  }


}
