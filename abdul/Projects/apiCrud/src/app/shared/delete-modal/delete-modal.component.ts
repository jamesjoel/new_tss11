import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudInterface } from '../../models/stud.interface';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input() parentData:StudInterface;
  @Output() delObj = new EventEmitter;

  constructor(private _studServ : StudentService) { }

  ngOnInit() {
  }

  deleteUser(){
    // console.log(this.parentData);
    this.delObj.emit();
  }

}
