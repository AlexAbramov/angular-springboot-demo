import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BarChartModel } from './bar-chart.model';
import { Sequence } from '../shared/sequence';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  ticks=[]

  @Input()
  model:BarChartModel

  constructor() { }

  ngOnInit() {
  }

  itemClick(item){

  }

  seqClick(s:Sequence){

  }

  translate(x, y){
      return `translate(${x}, ${y})`
  }
}