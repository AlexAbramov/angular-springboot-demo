import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbEntity } from './entity';
import { DbParam, isParamVisible, ParamVisibility } from '../param/param';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent extends AppBaseComponent implements OnInit {

  @Input() entity:DbEntity
  @Input() data:any
  @Input() readonly:boolean=false
  @Output() submit=new EventEmitter(true)

  getVisibleParams():DbParam[]{
    return this.entity.params.filter(p=>isParamVisible(p,ParamVisibility.Form))
  }

  getControlType(p:DbParam){
    switch(p.type){
      case 'string': 
      case 'int': 
      case 'number': 
        return 'input' 
      case 'bool':
        return 'checkbox'
    }
  }

  getInputType(p:DbParam){
    switch(p.type){
      case 'int': 
      case 'number': 
        return 'number'
    }

    const allowedFormats=['color','date','datetime-local','email','month','number','password','search','tel','text','time','url','week']
    if(p.format && allowedFormats.indexOf(p.format)>=0){
      return p.format
    }

    return 'text'
  }

  constructor() { 
    super()
  }

  ngOnInit() {
  }

   onSubmit() {
     if(this.submit) this.submit.emit()
   }
}
