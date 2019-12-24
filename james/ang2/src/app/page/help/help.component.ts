import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  check=true;

  a = 1;

  constructor() { }

  ngOnInit() {
  }

  show() {
    // this.check = false;
    this.check = !this.check;
  }
  demo(n) {
    // console.log(n);
    this.a=n;
  }



}
