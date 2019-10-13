import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { LineChartModel } from './line-chart.model';
import { Sequence } from '../shared/sequence';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  ticks=[]

  @Input()
  model:LineChartModel

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

