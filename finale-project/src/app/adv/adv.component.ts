import { Component, OnInit } from '@angular/core';
import { AdvLoginService } from '../services/adv-login.service';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.scss']
})
export class AdvComponent implements OnInit {

  constructor(
    private _advLogin : AdvLoginService
  ) { }

  ngOnInit() {
  }

}
