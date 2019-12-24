import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jsonData = [
    {
      name : "Sony sbh20",
      price : 2000,
      category : "Earphone"
    },
    {
      name : "Samsung TV",
      price : 40000,
      category : "Electronics"
    },
    {
      name : "Hair Fridge",
      price : 50000,
      category : "Home Appliance"
    },
    {
      name : "T-Shirt",
      price : 600,
      category : "Mens Fashion"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
