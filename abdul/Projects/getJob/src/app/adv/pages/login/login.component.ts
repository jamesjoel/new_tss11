import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : any = {
    email : "",
    password : ""
  }

  message : string;

  constructor(private advLogin : LoginService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    // console.log(this.user);
    this.advLogin.doLogin(this.user).subscribe(result=>{
      console.log(result.authToken);
      localStorage.setItem("token", result.authToken);
      this.router.navigate(["/adv/dashboard"]);
    }, err=>{
      if(err.error.status==1){
        this.message = "The username or password is incorrect"
      }
      if(err.error.status==2){
        this.message = "This Password is incorrect"
      }
    })
  }

}
