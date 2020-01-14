import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any, c:any){
    console.log("-------", c);
    if(b<25){
      let x = a*20/100;
      return a-x;

    }
    if(b>=25){
      let x = a * 10 / 100;
      return a-x;
    }
  }

}
