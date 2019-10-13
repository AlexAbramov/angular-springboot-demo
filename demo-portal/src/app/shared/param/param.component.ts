import { Component, OnInit, Input } from '@angular/core';
import { DbParam } from './param';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss']
})
export class ParamComponent implements OnInit {

  @Input() param:DbParam


  constructor() { }

  ngOnInit() {
  }

}
