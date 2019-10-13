import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  title:string='Demo Portal'
  message:string

  constructor() { }

  ngOnInit() {
  }

}
