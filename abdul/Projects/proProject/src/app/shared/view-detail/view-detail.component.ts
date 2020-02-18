import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  @Input() getObj :User;  //Comes from parent component, always parent component decide obj to use inside child component.
  
  @Output() dataObj = new EventEmitter;

  constructor(private router : Router) {}

  ngOnInit() {
    // this.getObj = this.userServ.emptyObj(); 
    //no need to empty it because the 'getObj' is comes from parent component, which we will recieve as '@Input()' method and this is already empty at parent clearForm() using service.
  }

  editUser(){
    // 1. first method->this is query param method when you 'NOT' want to define redirected url as (edit/:id) inside router module file.
    this.router.navigate(['/edit'], {queryParams : {sendObj : JSON.stringify(this.getObj.id)} } );
                      //::::   OR  ::::
    // 2. second method-> In case of defining url change in router module (edit/:id);
    // this.router.navigate(['/edit', this.getObj.id]);
  }

}
