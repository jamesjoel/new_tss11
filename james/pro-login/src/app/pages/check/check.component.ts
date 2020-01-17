import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
  demo() {
    this._http.get<any>("http://localhost:3000/api/demo").subscribe(result=>{
    console.log("-------",result);
    },
    err=>{
      console.log(err);
    })
  }
}
