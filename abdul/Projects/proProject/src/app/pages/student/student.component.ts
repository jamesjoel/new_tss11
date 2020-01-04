import { Component, OnInit } from '@angular/core';
import { Student } from '../../modules/student.interface';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudentData:Student[];

  constructor(private _std : StudentService) { }

  ngOnInit() {
    this.allStudentData = this._std.allStudentList;
    console.log(this.allStudentData);
    console.log("hi");
  }

}
