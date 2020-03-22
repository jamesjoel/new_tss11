import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ImgUploadService } from 'src/app/services/img-upload.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  userInfo : any ={
    name : "",
    email : ""
  };
  userId : any;

  constructor(private userServ : UserService, private router : Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.userServ.getUsers().subscribe(result=>{
      this.userInfo = result;
      // console.log(this.userInfo);
    })
  }

  updateData(file : any){
    
    let fileInfo = file.files[0];
    let form = new FormData();
    form.append("image", fileInfo);
    form.append("info", JSON.stringify(this.userInfo));
    this.userServ.updateUser(form).subscribe(result=>{
      // console.log("-------------",result);  
      this.router.navigate(['/adv/profile']);
    });
     
  }

}
