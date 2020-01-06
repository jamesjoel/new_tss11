import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students:Student[];

  constructor(private _stu : StudentService) { }

  ngOnInit() {
    this.students = this._stu.getStudent();
    //console.log(this.data);
  }

}
