import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() parentData;

  @Output() sendDataToParent = new EventEmitter;

  name:string="Ishan";

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.sendDataToParent.emit(this.parentData);
  }

}
