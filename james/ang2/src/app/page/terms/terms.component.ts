import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  name = "rohit";
  data = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name: "jaya",
      age: 20,
      city: "bhopal"
    },
    {
      name: "gaurav",
      age: 22,
      city: "ujjain"
    }
  ];

  newStudent={
    name : "",
    age : null,
    city: ""
  }





  constructor() { }

  ngOnInit() {
  }
  demo(){
    console.log("hello");
  }
  add(){
    // console.log(this.newStudent);
    this.data.push(this.newStudent);
    this.newStudent={
      name : "",
      age : null,
      city : ""
    }
  }

}
