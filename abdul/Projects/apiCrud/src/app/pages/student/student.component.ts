import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { StudInterface } from '../../models/stud.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudent:StudInterface[];
  obj:any;

  constructor(private _studServ : StudentService) { }

  ngOnInit() {
    this._studServ.getAllStudent().subscribe(result=>{
      this.allStudent = result;
      // console.log(result);
    });
  }

  emptyObj(){
    // this.obj = this._studServ.emptyInterface();
  }

  addUser(){
    
  }

  askEdit(editData:StudInterface){
    console.log(editData);
  }

  askDel(delData:StudInterface){
    this.obj = delData;
  }

  delNow(){
    // console.log("----------",this.obj);
    this._studServ.deleteStudent(this.obj).subscribe(result=>{
      let n = this.allStudent.indexOf(this.obj);
      this.allStudent.splice(n,1);
    });
  }



}
