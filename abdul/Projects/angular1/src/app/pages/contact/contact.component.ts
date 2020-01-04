import { Component, OnInit } from '@angular/core';
import { Students } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  singleStudent:any = {};

  collectData:Students = {
    name : "",
    age : null,
    city : ""
  }

  constructor( private route : ActivatedRoute, private router : Router) { }

  Data : Students[] = 
    [
      {
        id : 1,
        name : "abdul",
        age : 23,
        city : "Indore"
      },
      {
        id : 2,
        name : "ishan",
        age : 22,
        city : "Jabalpur"
      },
      {
        id : 3,
        name : "khan",
        age : 23,
        city : "Katni"
      },
    ]

  ngOnInit() {
  }

  addUser(){
    if(this.collectData.id){
      for(let i = 0; i<this.Data.length;i++){
        if(this.Data[i].id == this.collectData.id){
          this.Data[i] = this.collectData;
          break;
        }
      }
    } else {
      this.Data.push(this.collectData);
    }

  }

  add(){
    this.collectData = {
      name : "",
      age : null,
      city : ""
    }
  }


  deleteThis(x:Students){
    // console.log("........",x);
    this.singleStudent = x;
  }

  deleteUser(){
    let n = this.Data.indexOf(this.singleStudent);
    this.Data.splice(n,1);
    // console.log(n);
  }

  editUser(e:Students){
    // this.collectData = e;
    this.collectData = {... e};
  }

  redirect(){
    this.router.navigate(["main"]);
  }

  

  
  

  

}
