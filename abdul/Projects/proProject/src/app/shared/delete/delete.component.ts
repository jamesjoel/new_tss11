import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() sendObj : User;
  @Output() delObj = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  deleteUser(){
    this.delObj.emit(this.sendObj);
  }

}
