import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../shared/app/app.service';
import { CompaniesService } from '../companies/companies.service';
import { PieChartModel } from '../shared/charts/pie-chart/pie-chart.model';
import { LineChartModel } from '../shared/charts/line-chart/line-chart.model';
import { Sequence } from '../shared/charts/shared/sequence';
import { BubbleChartModel } from '../shared/charts/bubble-chart/bubble-chart.model';
import { BarChartModel } from '../shared/charts/bar-chart/bar-chart.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  companies=[]
  selCompany:any
  lineChartModel=new LineChartModel()
  barChartModel=new BarChartModel()
  bubbleChartModel=new BubbleChartModel()
  pieChartModel=new PieChartModel()
  isAnimated=false
  timerId:any

  constructor(private appService:AppService, private companiesService: CompaniesService) { }

  async ngOnInit() {
    await this.loadData();
    this.initModels()
    this.timerId=setInterval(()=>this.onTimer(),50);
  }

  onTimer(): void {
    if(this.isAnimated) this.bubbleChartModel.update();
  }

  initModels() {
    this.lineChartModel=new LineChartModel()
    this.barChartModel=new BarChartModel()
    this.bubbleChartModel=new BubbleChartModel()
    
    this.lineChartModel.addSeq('KPI1',this.getRandomArray())
    this.lineChartModel.addSeq('KPI2',this.getRandomArray())
    this.lineChartModel.addSeq('KPI3',this.getRandomArray())

    for(let s of this.lineChartModel.sequences) this.barChartModel.sequences.push(s)
  }

  getRandomArray(): number[] {
    const arr=[]
    let r:number;
    while(arr.length<4){
      r=r==null?40+Math.random()*20:r+this.getDelta()
      arr.push(r)
    }
    return arr
  }

  getDelta(){return (Math.random()-0.5)*10}

  async loadData():Promise<any>{
    try{
      this.companies=await this.companiesService.getCompanies();
      for(let c of this.companies){
        this.pieChartModel.push(c.id, c.name, c.revenue)        
      }
      this.pieChartModel.init();
    }
    catch(er){
      this.appService.error(er)
    }
  }

  rowSelect(c){
    if(c){
      this.selCompany=c
      this.initModels()
    }    
  }

  pieChartClick(i){
    if(i){
      const c=this.companies.find(c=>c.id==i.id)
      if(c){
        this.appService.alert(`<h3>${c.name}</h3><p>Revenue: ${c.revenue}</p>`)
      }
    }
  }

  animate(){
    this.isAnimated=!this.isAnimated
  }

  ngOnDestroy(){
    if(this.timerId){
      clearInterval(this.timerId)
      this.timerId=null;
    }
  }
}
