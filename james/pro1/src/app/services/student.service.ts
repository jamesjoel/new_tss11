import { Injectable } from '@angular/core';
import { Student } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  allStudent:Student[];
  constructor() { }

  getStudent() {
    this.allStudent=[
      {
        name : "rohit",
        age : 25,
        fee : 5000

      },
      {
        name : "nilesh",
        age : 20,
        fee : 6000
      },
      {
        name : "jaya",
        age : 23,
        fee : 5500
      },
      {
        name : "mohit",
        age : 28,
        fee : 5000
      }
    ];

    return this.allStudent;
  }

}
