import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  @Input() cName;
  @Input() cCity;
  @Input() cGo;
  @Output() test = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit() {
  }
  goToParent() {
    // console.log(this.name);
    this.test.emit(this.name);
  }

}
