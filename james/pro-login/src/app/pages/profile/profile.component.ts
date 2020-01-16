import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _loginService : LoginService) { }

  ngOnInit() {
  }
  demo() {
    this._loginService.getUser().subscribe(result=>{
      console.log(result);
    });
  }

}
