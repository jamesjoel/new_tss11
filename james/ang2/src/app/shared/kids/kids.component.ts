import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  @Input() cName;
  @Input() cCity;
  @Input() cGo;

  constructor() { }

  ngOnInit() {
  }

}
