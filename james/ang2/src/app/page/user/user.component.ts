import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name:string="rohit";
  city : string = "indore";

  temp:string="";
  go:string="";

  constructor() { }

  ngOnInit() {
  }
  afterClick() {
    this.go=this.temp;
  }

}
