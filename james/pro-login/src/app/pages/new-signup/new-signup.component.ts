import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-signup',
  templateUrl: './new-signup.component.html',
  styleUrls: ['./new-signup.component.scss']
})
export class NewSignupComponent implements OnInit {
  registerForm: FormGroup;
  myForm:FormGroup;
  submitted = false;
  check=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
    this.myForm = this.formBuilder.group({
      f_name : ["", [Validators.required, Validators.minLength(5)]]
    })
  }
  
  get f() { return this.registerForm.controls; }
  get my() { return this.myForm.controls; }

  save() {
    this.check=true;
    if(this.myForm.invalid){
      return;
    }
    alert("ok");
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
