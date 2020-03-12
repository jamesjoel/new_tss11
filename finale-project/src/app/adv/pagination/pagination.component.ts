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
  recordPerPage = 100;
  pageNo = 1;
  counter = 1;
  constructor(private _http : HttpClient, private _actRoute : ActivatedRoute) { }

  ngOnInit() {
    this._actRoute.queryParams.subscribe(params=>{
      
      if(params.page){
        this.pageNo = params.page;
      }
      this.counter = (this.pageNo-1)*this.recordPerPage;
      // if(params.total){
      //   this.recordPerPage = params.total;
      // }
      this._http.get<any>("http://localhost:3000/api/getcity/"+this.pageNo+"/"+this.recordPerPage).subscribe(result=>{
      this.arr = result;
    });

    // console.log(this.recordPerPage);

      this._http.get<any>("http://localhost:3000/api/totalcity").subscribe(result => {
        this.total = result.total;

        this.totalPages = Math.ceil(this.total / this.recordPerPage);
        // console.log(this.totalPages);

      });


    });

    



    
    



  }

}
