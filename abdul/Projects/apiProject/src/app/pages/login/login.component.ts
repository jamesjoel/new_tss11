import { Component, OnInit } from '@angular/core';
import { userInterface } from '../../models/login-interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : userInterface = {
    username : "",
    password : ""
  }

  message : string;

  constructor(private _loginServ : LoginService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    this._loginServ.goLogin(this.user).subscribe(result=>{
      // console.log(result);
      localStorage.setItem("tokenKey",result.token);
      this.router.navigate(['/profile']);
    }, err=>{
      console.log("**********",err.error.msg);
      this.message = err.error.msg;
    })
  }

}
