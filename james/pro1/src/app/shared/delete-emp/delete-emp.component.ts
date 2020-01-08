import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Employee } from '../../models/employee.interface';


@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.scss']
})
export class DeleteEmpComponent implements OnInit {
  @Input() employee:Employee;
  @Output() deleteEmployee = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete() {
    // console.log("------", this.employee);
    this.deleteEmployee.emit();
  }

}
