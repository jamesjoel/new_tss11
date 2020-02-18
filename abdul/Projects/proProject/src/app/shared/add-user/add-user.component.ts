import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  // dataObj :User;

  @Input() getObj :User;
  @Output() sendObj = new EventEmitter;

  constructor(private route : ActivatedRoute, private userServ : UserService) { }

  ngOnInit() {
    this.getObj = this.userServ.emptyObj();
  }

  addUser(){
    // console.log(this.dataObj);
    this.sendObj.emit(this.getObj);
  }

}
