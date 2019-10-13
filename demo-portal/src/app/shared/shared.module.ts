import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatPaginatorModule, MatCheckboxModule, MatSelectModule
} from '@angular/material';
import { AlertComponent } from './dialog/alert/alert.component';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EntityComponent } from './entity/entity.component';
import { ParamComponent } from './param/param.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LegendComponent } from './charts/legend/legend.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';


@NgModule({
  declarations: [AlertComponent, SafeHtmlPipe, EntityComponent, ParamComponent, PieChartComponent, LegendComponent,LineChartComponent,BubbleChartComponent,BarChartComponent],
  entryComponents:[AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AlertComponent,
    EntityComponent,
    PieChartComponent,
    LegendComponent,
    LineChartComponent,
    BubbleChartComponent,
    BarChartComponent
  ]


})
export class SharedModule { }
