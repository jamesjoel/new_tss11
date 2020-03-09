import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  arr:[];
  constructor(private _http : HttpClient) { }

  ngOnInit() {
    this._http.get<any>("http://localhost:3000/api/admin/advlist").subscribe(result=>{
      // console.log(result);
      this.arr = result;
    })
  }
  changeStatus(obj){
    
    this._http.get<any>("http://localhost:3000/api/admin/changestatus/"+obj._id+"/"+obj.status).subscribe(result=>{
      // console.log(result);
      // for(let i = 0; i < this.arr.length; i++)
      // {
      //   if(this.arr[i]._id == id)
      //   {
      //     if(status==1)
      //     {
      //       this.arr[i].status = 0;
      //     }
      //     else{
      //       this.arr[i].status =  1;
      //     }
      //   }
      // }

      // let i = this.arr.indexOf(obj);
      // if(obj.status==1){
      //   this.arr[i].status = 0;
      // }
      // else{
        
      //   this.arr[i].status = 1;
      // }
    })
  }

}
