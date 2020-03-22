import { Component, OnInit } from '@angular/core';
import { AdvLoginService } from '../../../services/adv-login.service';
import { Adv } from 'src/app/models/adv';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adv:Adv={
    email : "",
    password : ""
  };
  message:string;
  msg:string;
  constructor(
    private _advLogin: AdvLoginService,
    private _router : Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("msg")){
      this.msg=localStorage.getItem("msg");
      localStorage.removeItem("msg");
    }
  }
  login() {
    this._advLogin.doLogin(this.adv).subscribe(result=>{
      // console.log(result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/dashboard"]);
    },
    err=>{
      // console.log(err.error);
      if(err.error.status==1){
        this.message="This Username And Password is Incorrect";
      }
      if(err.error.status==2) {
        this.message="This Password is Incorrect";
      }
    })
  }

}
