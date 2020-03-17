import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  arr:any=[];

  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit() {
    this._http.get<any>("http://localhost:3000/api/list").subscribe(result=>{
      // console.log(result);
      this.arr = result;
    })
  }

}
