import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  @Input() getObj :User;

  // @Output() sendObj = this.getObj;

  constructor() {
    console.log(this.getObj)
   }

  ngOnInit() {
    // console.log(this.getObj)
  }

  editUser(){

  }

}
