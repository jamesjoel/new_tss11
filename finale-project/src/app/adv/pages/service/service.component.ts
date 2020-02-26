import { Component, OnInit } from '@angular/core';
import { AdvService } from '../../../services/adv.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  service = {
    title :"",
    charge : null,
    type : "",
    detail : ""
  }
  constructor(
    private _advService : AdvService
  ) { }

  ngOnInit() {
  }
  demo(a){
    // console.log(a.files[0]);
    let form = new FormData(); // for creating a form by JS
    form.append("image", a.files[0]);
    form.append('name', "rohit");
    this._advService.addService(form).subscribe(result=>{
      console.log(result);
    });
  }

  add(file){
    let form = new FormData();
    form.append("image", file.files[0]);
    form.append("data", JSON.stringify(this.service))
    this._advService.addService(form).subscribe(result=>{
      console.log(result);
    })
    // form.set("data",this.service);
  }



}
