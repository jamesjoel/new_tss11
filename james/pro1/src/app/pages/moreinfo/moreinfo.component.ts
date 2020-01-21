import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.scss']
})
export class MoreinfoComponent implements OnInit {

  constructor(private _actRoute : ActivatedRoute, private _emp : EmployeeService) {
      this._actRoute.paramMap.subscribe(params=>{
        // console.log(paras.get('id'));
        let x = params.get("id");
        this._emp.getEmployee(x).subscribe(result=>{
          console.log("......", result);
        },err=>{
          
        });
      });
   }

  ngOnInit() {
  }

}
