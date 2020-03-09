import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../../services/adv.service';
import { Adv } from '../../../models/adv';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  boxShow=false;
  adv:Adv={
    name : "",
    email : "",
    password : "",
    contact : null,
    hobby : []
  };
  hobby=[];

  constructor(
    private _advService : AdvService,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  getHobby(event, val){
    if(event.target.checked){
      this.hobby.push(val);
    }
    else{
      let n= this.hobby.indexOf(val);
      this.hobby.splice(n, 1);
    }
  }
  save() {
    this.adv.hobby = this.hobby;
    console.log(this.adv);
    // this._advService.signupAdv(this.adv).subscribe(result=>{
    //   // console.log(result);
    //   // this.boxShow=true;
    //   localStorage.setItem("msg", "dsfgg dsfg");
    //   this._router.navigate(["/login"]);
    // });
    
  }

}
