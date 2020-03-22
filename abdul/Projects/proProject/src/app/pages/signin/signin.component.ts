import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  subscriptions: any;
  usersService: any;

  constructor(private userServ : UserService, private router : Router) { 
    // this.subscriptions.push(
    //   this.usersService.authenticationStatus.subscribe(data => {
    //     this.checkLoginStatus(data);
    //   })
    // );
  }

  ngOnInit() {
  }

  async signin(){
    await this.userServ.login(this.getObj).then( loginRes => {
      console.log('loginRes%%%', loginRes);
      if(loginRes.code !== undefined) {
        console.log(loginRes.message)
      } else {
        this.router.navigate(["/profile"]);
      }
    })
  }

  public checkLoginStatus(data: any): void {
    console.log(data,"ooooooooo")
    // if (data.status === 200) {
    //   this.router.navigate(['/profile/']);
    // } 
  }

  

}
