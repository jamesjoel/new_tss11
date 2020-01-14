import { Component, OnInit, Output } from '@angular/core';
import { StudInterface } from '../../models/stud.interface';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  constructor() { }

  obj = {
    first_name : "",
    last_name : "",
    email : "",
    city : "",
    phone : null
  }

  @Output() newStuObj = new EventEmitter;
  
  studObj:StudInterface;

  ngOnInit() {
  }

  addUser(){
    // this.newStuObj.emit()
  }

}
