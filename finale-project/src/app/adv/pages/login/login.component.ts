import { Component, OnInit } from '@angular/core';
import { AdvService } from 'src/app/services/adv.service';
import { Adv } from 'src/app/models/adv';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adv:Adv={
    email : "",
    password : ""
  };
  constructor(
    private _advService : AdvService
  ) { }

  ngOnInit() {
  }

}
