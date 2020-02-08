import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  dataObj :User = {
    name : "",
    age : null,
    city :""
  }

  @Output() sendObj = new EventEmitter;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  }

  addUser(){
    // console.log(this.dataObj);
    this.sendObj.emit(this.dataObj);
  }

}
