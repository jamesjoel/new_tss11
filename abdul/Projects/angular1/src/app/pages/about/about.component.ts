import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  a = "Abdul Ishan";

  array1 = ["red","green","blue"];
  array2 = ["red","green","blue"];

  b = true;

  constructor() { }

  ngOnInit() {
  }

}
