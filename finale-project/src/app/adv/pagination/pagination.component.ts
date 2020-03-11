import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  arr=[];
  total = 0;
  totalPages = 0;
  recordPerPage = 0;
  constructor(private _http : HttpClient, private _actRoute : ActivatedRoute) { }

  ngOnInit() {
    this._actRoute.queryParams.subscribe(params=>{
      if(params.a){
        this.recordPerPage = params.a;
      }else{
        
        this.recordPerPage = 200;
      }
    })



    this._http.get<any>("http://localhost:3000/api/getcity/"+this.recordPerPage).subscribe(result=>{
      this.arr = result;
    });
    this._http.get<any>("http://localhost:3000/api/totalcity").subscribe(result=>{
      this.total = result.total;

      this.totalPages = Math.ceil(this.total/this.recordPerPage);
      // console.log(this.totalPages);

    })



  }

}
