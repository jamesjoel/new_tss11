import { Injectable } from '@angular/core';
import { Student } from '../modules/student.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3000/api/"

  allStudentList:Student[];

  constructor(private http : HttpClient) { }

  getAllStudents(){
    return this.http.get<any>(this.url+"getuser");
  }

  goLogin(){
    return this.http.get<any>(this.url+"login");
  }

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
