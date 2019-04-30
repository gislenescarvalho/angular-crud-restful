import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportPieChartComponent } from './report-pie-chart/report-pie-chart.component';

import { ChartsModule } from 'ng2-charts';
import { ReportDoughnutChartComponent } from './report-doughnut-chart/report-doughnut-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    ReportComponent,
    ReportPieChartComponent,
    ReportDoughnutChartComponent],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
