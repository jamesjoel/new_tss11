import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    // console.log(this._emp.getEmployee());
    this._emp.getEmployee().subscribe(result=>{
      // console.log(result);
      this.employees = result;
    });
  }
  save(obj:Employee) {
    this._emp.addEmployee(obj).subscribe(result=>{
      // console.log(result);
      this.employees.push(result);
    });
  }
}
