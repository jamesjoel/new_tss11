import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Students } from '../../models/student.interface';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  @Input() parentObj:Students;
  @Output() fromChiled = new EventEmitter;

  constructor() {
   
   }

  ngOnInit() {
  }

  addUser(){
    // console.log(this.parentObj);
    this.fromChiled.emit(this.parentObj);
  }

}
