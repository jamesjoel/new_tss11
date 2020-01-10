import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login={
    username : "",
    password : ""
  }
  message:string;

  constructor(
      private _loginService : LoginService,
      private _router : Router
      ) { }

  ngOnInit() {
  }
  doLogin() {
    this._loginService.login(this.login).subscribe(result=>{
      localStorage.setItem("token", result.token);
      this._router.navigate(["/dashboard"]);
    },
    demo =>{
      console.log(demo.error.msg);
      this.message=demo.error.msg;
    }
    );
  }

}
