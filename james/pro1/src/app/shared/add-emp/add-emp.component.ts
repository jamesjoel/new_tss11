import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {

  @Output() sendToParent = new EventEmitter();  
  @Input() employee:Employee;
  constructor() { }

  ngOnInit() {
  }
  save() {
    this.sendToParent.emit(this.employee);
  }

}
