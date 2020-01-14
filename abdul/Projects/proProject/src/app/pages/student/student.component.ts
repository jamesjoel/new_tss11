import { Component, OnInit } from '@angular/core';
import { Student } from '../../modules/student.interface';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudentData:any = [];
  studentData:any={};

  constructor(private _std : StudentService) { }

  ngOnInit() {
    this.allStudentData = this._std.allStudents();
  }

  viewDetail(data){
    this.studentData = data;
    
    // console.log(this.studentData);
  }

  deleteStudent(stu){
    // console.log(stu);
    this.studentData = stu;

  }

  deleteNow(data){
    // console.log(data);
    let n = this.allStudentData.indexOf(data);
    this.allStudentData.splice(n,1);
  }

}
