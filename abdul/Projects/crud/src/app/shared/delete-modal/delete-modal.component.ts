import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Students } from '../../models/student.interface';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input() parentObj:Students;
  @Output() sendObj = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  deleteUser(){
    this.sendObj.emit(this.parentObj);
  }

}
