import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[demo]'
})
export class DemoDirective {

  constructor(private _el : ElementRef) {
    _el.nativeElement.style.fontSize="25px";
    _el.nativeElement.addEventListener("dblclick", function(){
      alert();
    });
  }
}
