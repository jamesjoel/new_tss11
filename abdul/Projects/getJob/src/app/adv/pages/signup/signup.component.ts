import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  message : string;
  formValidate : FormGroup;
  submitted = false;

  // user:any;

  constructor(private formBuild : FormBuilder, private router : Router, private loginServ : LoginService) { 
    this.formValidate = this.formBuild.group({
      name : ["", [Validators.required, Validators.minLength(3)]],
      email : ["", [Validators.required, Validators.email]],
      password : ["", [Validators.required, Validators.minLength(8)]],
      confirm_password : ["",Validators.required],
      address : ["", [Validators.required, Validators.minLength(10), Validators.maxLength(70)]],
      contact : ["", [Validators.required, Validators.minLength(10)]]
    });
  }

  

  ngOnInit() {
  }

  get check(){
    return this.formValidate.controls;
  }

  register(){
    // console.log(this.user)
    this.submitted = true;
    if(this.formValidate.valid){

      delete this.formValidate.value.confirm_password;

      this.loginServ.doSignup(this.formValidate.value).subscribe(result=>{
        console.log(result);
        this.router.navigate(["/adv/login"]);
      }, err=>{
        if(err.error.status==1){
          this.message = "This Email is already registered"
        }
      })
    }
  }

}
