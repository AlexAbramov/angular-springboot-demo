import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PieChartModel } from './pie-chart.model';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input()
  model:PieChartModel

  @Input()
  selItem:any

  @Output()
  itemClick=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  _itemClick(item){
    this.itemClick.emit(item)
  }

  getClass(item:any):string{
    return (item && this.selItem && item.id==this.selItem.id) ? 'sel-label' :'label'   
  }

}

