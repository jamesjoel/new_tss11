import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Inside 'Home component' and where we use 'service:UserService' we are using json-server for crud operations and every operations on home-component, edit-detail.

  allUsers : User[];
  dataObj : User =this.userServ.emptyObj();

  constructor(private userServ : UserService) { }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(result=>{
      this.allUsers = result
      console.log("=======allUser====",this.allUsers);
    })
  }

  clearForm(){
    this.dataObj = this.userServ.emptyObj(); // here we clearing obj on every click of add user
  }

  addNow(obj : User){
    this.userServ.addUser(obj).subscribe(result=>{
      this.allUsers.push(obj);
      console.log("-------new inserted row---",this.allUsers);
    })
  }

  moreInfo(data:User){
    this.dataObj = data;
  }

  editNow(data:User){
    console.log("==========data--------",data);
    for(let i=0; i<this.allUsers.length; i++){
      if(this.allUsers[i].id==data.id){
        this.allUsers[i] = data;
        console.log("yes true----------", this.allUsers[i]);
        break;
      }
    }
  }

  askDelete(data:User){
    this.dataObj = data;
  }

  deleteNow(data:User){
    // console.log(data);
    this.userServ.deleteUser(data).subscribe(result=>{
    let x = this.allUsers.indexOf(data);
    this.allUsers.splice(x,1);
    });
  }

}
