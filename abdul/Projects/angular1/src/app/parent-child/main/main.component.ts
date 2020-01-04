import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  name : string = "Abdul Ishan";
  bindData:string="";
  sendingData:string="";
  actualData:string;

  constructor() {}

  ngOnInit() {
  }

  sendToChild(){
    // console.log("hi")
    this.sendingData = this.bindData;
  }

  recieveData(recievedData){
    console.log(recievedData);
    this.actualData = recievedData;
  }

}
