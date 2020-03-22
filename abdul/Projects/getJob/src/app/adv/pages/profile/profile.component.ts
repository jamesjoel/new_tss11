import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData : any ={
    name: "",
    email :""
  };
  image:any={
    path:""
  }

  constructor(private userServ : UserService, private router : Router) { }

  ngOnInit() {
    this.userServ.getUsers().subscribe(result=>{
      this.userData = result;
      this.image.path=result.path;

      console.log("--- Current User Data ---", result);
    })
  }

  editProfile(){
    // console.log(this.userData);
    this.router.navigate(["/adv/edit"]);
  }

}
