import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BubbleChartModel } from './bubble-chart.model';
import { Sequence } from '../shared/sequence';

@Component({
  selector: 'bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  ticks=[]

  @Input()
  model:BubbleChartModel

  constructor() { 
  }

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

