import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private usersService: UserService
  ) {
    this.usersService.user$.subscribe(currentUser => {
      console.log('currentUser', currentUser);
    })
   }

  ngOnInit() {
  }

}
