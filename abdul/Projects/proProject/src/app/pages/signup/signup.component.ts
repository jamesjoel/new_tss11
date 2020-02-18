import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formValidate : FormGroup;
  submitted = false;

  constructor(private frmBuild : FormBuilder,private router : Router) {
    this.formValidate = this.frmBuild.group({
      fullName : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email : ["",[Validators.required, Validators.email]],
      password : ["",[Validators.required, Validators.minLength(8)]],
      cnf_password : ["", Validators.required],
      address : ["", [Validators.required, Validators.minLength(5)]],
      gender : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      check : ["", Validators.required]
    })
   }

  ngOnInit() {
  }

  get check(){
    return this.formValidate.controls;
   }

   signup(data : NgForm){
     this.submitted = true;
     if(this.formValidate.valid){
       console.log(data)
     this.router.navigate(['/student']);
       return;
     }
     

   }

}
