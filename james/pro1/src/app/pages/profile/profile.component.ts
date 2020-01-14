import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User={
    full_name : "",
    username : "",
    city : "",
    gender : ""
  };
  constructor(private _userService : UserService) {
    this._userService.getUser().subscribe(result => {
      console.log("-----", result);
      this.user = result;
    });
   }

  ngOnInit() {
    
  }

}
