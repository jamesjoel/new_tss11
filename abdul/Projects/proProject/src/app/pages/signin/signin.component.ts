import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  getObj : any = {
    email : "",
    password : ""
  }

  errMsg : string = "Username or Password is incorrect";

  constructor(private studServ : StudentService) { }

  ngOnInit() {
  }

  signin(){
    console.log(this.getObj);
  }

}
