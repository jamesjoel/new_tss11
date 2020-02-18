import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

  userData: any ={};
  userId: number;
  allUser : User[] =[];

  constructor(private userServ: UserService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userData = this.userServ.emptyObj();

    // 1. first method-> when in route not define (edit/:id), this method is handle by 'queryparam'

    this.route.queryParams.subscribe(params => {
      this.userId = params.sendObj;
      this.userServ.getAllUsers(this.userId).subscribe(result=>{
        this.userData = result;
        console.log("----------before-update------",this.userData);
      })
    });

    // end of first method ----------------

    // 2. second method-> when you define inside routing.module file (edit/:id), this method is handle by 'paramMap', in both mwthod to use 'ActivatedRoute' for find url data/id need to import 'ActivatedRoute'.

    // a: let id = parseInt(this.route.snapshot.paramMap.get('id'));  //snapshot method
    

    //b: using 'subscribe' method for sync or refreshed url in this case we also import 'paramMap' inside '@angular/route'.

    // this.route.paramMap.subscribe((result : ParamMap)=>{
    //   let id = parseInt(result.get('id'));
    //   this.userId = id;
    //   // console.log(id,"---------id---------");
    // })

    // this.userServ.getAllUsers(this.userId).subscribe(alldta=>{
    //   this.userData = alldta;
    //   console.log("----------before-update------",this.userData);
    // });

    
  }

  updateData(){
    this.userServ.updateUser(this.userId, this.userData).subscribe(result=>{
      console.log("----------new-updated-data-------", this.userData);
    })
    
  }

}
