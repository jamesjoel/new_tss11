import { FormGroup } from '@angular/forms';
export function Match(a:string, b:string){
    return function(myForm : FormGroup){
        let c1 = myForm.controls[a];
        let c2 = myForm.controls[b];
        if(c2.errors){
            return;
        }
        if(c1.value  != c2.value){
            c2.setErrors({ mustMatch : true });
        }else{
            c2.setErrors(null);
        }


    }
}
export function Demo(a:string){
    
    return function(myForm:FormGroup){
        let x = myForm.controls[a];
        console.log(x);
        if(x.errors){
            return;
        }
        if(x.value.length < 5){
            x.setErrors({ hello : true});
        }
        else{
            x.setErrors(null);
        }
    }
}