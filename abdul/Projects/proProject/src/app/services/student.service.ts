import { Injectable } from '@angular/core';
import { Student } from '../modules/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  allStudentList:Student[];

  constructor() { }

  allStudents(){
    this.allStudentList=[
      {
        name : "Abdul",
        age : 23,
        fees : 10000
      },
      {
        name : "Ishan",
        age : 22,
        fees : 3000
      },
      {
        name : "Khan",
        age : 24,
        fees : 7000
      },
    ];

    return this.allStudentList;
  }
}
