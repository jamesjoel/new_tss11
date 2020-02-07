import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData : any = {};

  constructor(private _userServ : UserService) { }

  ngOnInit() {
    this._userServ.getUser().subscribe(result=>{
      this.userData = result;
      console.log(this.userData);
    })
  }

  show(){
    this._userServ.getUser().subscribe(result=>{
      this.userData = result;
      console.log(this.userData);
    })
  }




}
