import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';


@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  

  name:String = "rohit";
  data : Student[] = [
    {
      id : 1,
      name : "rohit",
      age : 25,
      city : "Indore"
    },
    {
      id : 2,
      name: "jaya",
      age: 20,
      city: "Bhopal"
    },
    {
      id : 3,
      name: "gaurav",
      age: 22,
      city: "Ujjain"
    }
  ];

  newStudent : Student={
    name : "",
    age : null,
    city: ""
  }

  // singleStudent:Student={
  //   name :"",
  //   age : null,
  //   city : ""
  // };
  singleStudent:Student;




  constructor() { }

  ngOnInit() {
  }
  demo(){
    console.log("hello");
  }
  add(){
    // console.log(this.newStudent);
    if(this.newStudent.id) {

    }
    else{

      this.data.push(this.newStudent);
    }
    
  }
  emptyStudent() {

    console.log(this.newStudent);

    this.newStudent = {
      name: "",
      age: null,
      city: ""
    }
  }
  askDelete(stu:Student) {
    this.singleStudent=stu;
  }
  delete() {
    let n = this.data.indexOf(this.singleStudent);
    this.data.splice(n, 1);
  }
  askEdit(stu:Student) {
    console.log("------", stu);
    // this.newStudent=stu;
    // this.newStudent = Object.assign({}, stu);

    this.newStudent = {... stu};
  }

}
