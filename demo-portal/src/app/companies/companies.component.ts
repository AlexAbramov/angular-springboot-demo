import {Component, OnInit, ViewChild, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AppBaseComponent } from '../shared/app-base/app-base.component';
import { AppService } from '../shared/app/app.service';
import { CompaniesService } from './companies.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent extends AppBaseComponent implements OnInit {
  
  displayedColumns = ["name", "revenue"];
  dataSource = new MatTableDataSource();
  
  @Input()
  items=[]  

  selItem:any

  @Output() 
  rowSelect=new EventEmitter()

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private appService:AppService, private companiesService: CompaniesService) { 
    super();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']) {
      this.dataSource.data=this.items;
    }
  }

  itemClick(item){
    this.selItem=item    
    this.rowSelect.emit(item)
  }

  getClass(item){
    return item==this.selItem?'sel-row':''
  }
}

