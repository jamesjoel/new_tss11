import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudentData= [];
  studentData:any={};

  constructor(private _std : StudentService, private router :Router) { }

  ngOnInit() {
    this.allStudentData = this._std.allStudents();
    this._std.getAllStudents().subscribe(result=>{
      console.log(result)
    })
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
