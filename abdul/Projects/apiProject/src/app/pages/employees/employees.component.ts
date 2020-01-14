import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeeList:any = [];

  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    // console.log(this._emp.getAllEmployees());
    this._emp.getAllEmployees().subscribe(result=>{
      this.employeeList = result;
      console.log(result);
    });
  }

}
