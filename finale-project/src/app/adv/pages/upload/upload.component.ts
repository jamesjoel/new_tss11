import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  msg:string;
  arr=[];



  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit() {
    this._http.get<any>("http://localhost:3000/demo").subscribe(result=>{
      this.arr=result;
    })
  }
  demo(a){
    console.log("-------", a.files[0]);
    let filedata = a.files[0];
    if(filedata.size<(1024*1024*2))
    {
      if (filedata.type == "image/jpeg" || filedata.type == "image/jpg")
      {
        let form = new FormData();
        form.append("photo", filedata);
        this._http.post<any>("http://localhost:3000/demo", form).subscribe(result=>{
            console.log(result);
            this.arr.push(result);
        })
      }
      else{
        this.msg = "File type error";
      }
    }
    else{
      this.msg = "File size error";
    }
  }

}
