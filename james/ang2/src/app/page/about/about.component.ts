import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  a = "rohit";
  arr = ["red", "green", "blue"];
  cities = ["indore", "ujjain", "bhopal", "mumbai", "pune"];

  data = [
    {
      name : "rohit",
      age : 25,
      fee : 5000
    },
    {
      name : "james",
      age : 23,
      fee : 6500
    },
    {
      name : "Amar",
      age : 30,
      fee : 6800
    }
  ];

  product = [
    {
      name : "I-Phone",
      price : 5000,
      category : "Mobile"
    },
    {
      name: "T-Shirt",
      price: 6000,
      category: "Fashion Mens"
    },
    {
      name: "Fridge",
      price: 25000,
      category: "Electronics"
    },
    {
      name: "Sony Z1",
      price: 23500,
      category: "Mobile"
    },
    {
      name: "LG TV",
      price: 23000,
      category: "Electronics"
    },
    {
      name: "Toaster",
      price: 1200,
      category: "Home Appliance"
    }
    
  ]


  constructor() { }

  ngOnInit() {
  }

}
