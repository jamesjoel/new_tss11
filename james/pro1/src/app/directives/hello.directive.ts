import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my]'
})
export class HelloDirective {

  constructor(private _el : ElementRef) { 
    // console.log(_el.nativeElement);
    _el.nativeElement.style.backgroundColor="red";
    _el.nativeElement.style.fontSize="20px";
    _el.nativeElement.innerHTML="INDORE ";
    
  }

}
