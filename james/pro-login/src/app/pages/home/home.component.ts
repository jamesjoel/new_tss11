import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BoxComponent } from '../../shared/box/box.component';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  

  @ViewChild(BoxComponent, { static : true }) mybox;
  constructor(private _ref : ChangeDetectorRef) { }
  name:string="";
  ngOnInit() {
    // this.name = this.mybox.name;
  }
  ngAfterViewInit(){  
      this.name = this.mybox.name;
      this._ref.detectChanges();
    
  }

}
