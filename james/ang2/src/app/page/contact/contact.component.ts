import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  x = true;
  a = 10;
  b = "rohit";

  z = 'd';
  constructor() { }

  ngOnInit() {
  }

}
