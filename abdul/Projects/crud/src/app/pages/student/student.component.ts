import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Students } from '../../models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudent : Students[];
  singleObj:Students={
    full_name : "",
    email : "",
    phone : null,
    city : "",
    gender : "",
    color : false
  };

  constructor(private _stdServ : StudentService) { }

  ngOnInit() {
    this._stdServ.getAllStudent().subscribe(result =>{
      // console.log(result);
      this.allStudent = result;
    });
  }

  emptyObj(){
    this.singleObj = this._stdServ.emptyObjects();
  }

  updateStudent(obj:Students){
    // console.log(obj);
    this.singleObj = {... obj};
  }

  childObj(obj:Students){
    // console.log('======', obj);
    if(obj.id){
      this._stdServ.updateStudent(obj).subscribe(result=>{
        for(let i=0;i<this.allStudent.length; i++){
          if(this.allStudent[i].id==obj.id){
            this.allStudent[i] = obj;
            return;
          }
        }
      });
    } else{
      this._stdServ.addStudent(obj).subscribe(result=>{
        this.allStudent.push(result);
        console.log(result);
      });
    }
  }
  
  askdelete(obj:Students){
    this.singleObj = obj;
  }

  deleteNow(delObj:Students){
    // console.log(delObj)
    this._stdServ.deleteStudent(delObj).subscribe(result=>{
      let n = this.allStudent.indexOf(this.singleObj);
      this.allStudent.splice(n,1);
    });
  }

}
