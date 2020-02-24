import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../../services/adv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _advService : AdvService
  ) { }

  ngOnInit() {
    this._advService.getUserData().subscribe(result=>{
      console.log(result);
    })
  }

}
