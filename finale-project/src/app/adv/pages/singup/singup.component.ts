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
    contact : null
  };

  constructor(
    private _advService : AdvService,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  save() {
    this._advService.signupAdv(this.adv).subscribe(result=>{
      // console.log(result);
      // this.boxShow=true;
      localStorage.setItem("msg", "dsfgg dsfg");
      this._router.navigate(["/login"]);
    });
    
  }

}
