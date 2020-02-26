import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../../services/adv.service';
import { Adv } from '../../../models/adv';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  adv:Adv;
  constructor(
    private _advService : AdvService
  ) { }

  ngOnInit() {
    this._advService.getUserData().subscribe(result=>{
      // console.log(result);
      this.adv = result;
    })
  }

}
