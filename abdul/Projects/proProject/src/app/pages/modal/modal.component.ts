import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() sendToParent = new EventEmitter;

  constructor(private _std : StudentService) { }

  @Input() parentData:any={};

  ngOnInit() {}

  deleteUser(){
    // console.log(this.parentData);
    this.sendToParent.emit(this.parentData);
  }

}
