import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { ReportPieChartComponent } from './report-pie-chart/report-pie-chart.component';
import { ReportDoughnutChartComponent } from './report-doughnut-chart/report-doughnut-chart.component';



const reportRoutes: Routes = [
  { path: 'reports', component: ReportComponent, pathMatch: 'full' },
  { path: 'reports/doughnut-chart', component: ReportDoughnutChartComponent},
  { path: 'reports/pie-chart', component: ReportPieChartComponent}
];

export const reportRouting = RouterModule.forChild(reportRoutes);
