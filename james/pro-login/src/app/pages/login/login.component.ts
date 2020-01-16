import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username : "",
    password : ""
  };
  message:string;
  constructor(private _loginService : LoginService, private _router : Router) { }

  ngOnInit() {
  }

  login() {
    this._loginService.doLogin(this.user).subscribe(result=>{
      // console.log("-----", result);
      localStorage.setItem("loginToken", result.token);
      this._router.navigate(["/profile"]);

    },
    err=>{
      console.log("*****", err.error);
      this.message=err.error.msg;
    })
  }

}
