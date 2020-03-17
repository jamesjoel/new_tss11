import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _http : HttpClient) { }
  data:any=[];
  ngOnInit() {
    console.log("***********");
    this._http.get<any>("http://localhost:3000/show").subscribe(result=>{
      console.log("----", result);
      this.data = result;
    })
  }

}
