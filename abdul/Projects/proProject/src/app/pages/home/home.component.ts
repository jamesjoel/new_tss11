import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allUsers : User[];
  userObj : User = {
    name : "",
    age : null,
    city : ""
  }

  constructor(private userServ : UserService) { }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(result=>{
      this.allUsers = result
      console.log("=======allUser====",this.allUsers);
    })
  }

  clearForm(){
    console.log("cleared form");
  }

  addNow(obj : User){
    console.log(obj)
  }

  moreInfo(data:User){
    this.userObj = data;
    console.log(this.userObj);
  }

  editUser(data:User){
    this.userObj = data;
    console.log(this.userObj);
  }

  askDelete(data:User){
    this.userObj = data;
    console.log(this.userObj);
  }

}
