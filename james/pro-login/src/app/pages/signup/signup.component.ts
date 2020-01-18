import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;
  
  constructor(private _fb : FormBuilder) {
    this.myForm = this._fb.group({
      f_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", [Validators.required, Validators.minLength(8)]],
      address : ["", Validators.required]
    });
   }

  ngOnInit() {
  }
  add() {
    console.log(this.myForm);
    return false;
  }

}
