import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-doughnut-chart',
  templateUrl: './report-doughnut-chart.component.html',
  styleUrls: ['./report-doughnut-chart.component.css']
})
export class ReportDoughnutChartComponent  {

// Doughnut
public doughnutChartLabels: string[] = ['Masculino', 'Feminino'];
public doughnutChartData: number[] = [3, 5];
public doughnutChartType: String = 'doughnut';

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}
}
