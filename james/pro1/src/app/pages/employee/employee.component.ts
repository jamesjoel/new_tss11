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
  index:number;
  selectedEmployee:Employee={
    first_name : "",
    last_name : "",
    email : ""


  };
  constructor(private _emp : EmployeeService) { }

  ngOnInit() {
    // console.log(this._emp.getEmployee());
    this._emp.getEmployee().subscribe(result=>{
      // console.log(result);
      this.employees = result;
    });
  }
  save(obj:Employee) {
      if(obj.id) {
        this._emp.updateEmployee(obj).subscribe(result=>{
          
          this.employees[this.index]=obj;
          // for(let i=0; i<this.employees.length; i++) {
          //   if(this.employees[i].id==obj.id){
          //       this.employees[i] = obj;
          //       break;
          //   }
          // }
        });
      }
      else {
        this._emp.addEmployee(obj).subscribe(result=>{
          this.employees.push(result);
        });
      }    
  }
  askAdd() {
    this.selectedEmployee=this._emp.emptyEmployee();
  }
  askDelete(obj:Employee) {
    this.selectedEmployee = obj;
  }
  delete() {
    // console.log("+++++++", this.selectedEmployee);
    this._emp.deleteEmployee(this.selectedEmployee).subscribe(result=>{
      let n=this.employees.indexOf(this.selectedEmployee);
      this.employees.splice(n, 1);
      
    });
  }
  askEdit(obj:Employee, n:number) {
    this.selectedEmployee = {... obj};
    this.index=n;
  }
}
