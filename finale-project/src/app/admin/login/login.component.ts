import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../../services/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adv: any = {
    email: "",
    password: ""
  };
  message: string;
  msg: string;
  constructor(
    private _adminLogin: AdminloginService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem("msg")) {
      this.msg = localStorage.getItem("msg");
      localStorage.removeItem("msg");
    }
  }
  login() {
    this._adminLogin.doLogin(this.adv).subscribe(result => {
      // console.log(result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/admin/dash"]);
    },
      err => {
        // console.log(err.error);
        if (err.error.status == 1) {
          this.message = "This Username And Password is Incorrect";
        }
        if (err.error.status == 2) {
          this.message = "This Password is Incorrect";

        }
      })
  }

}
