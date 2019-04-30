import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-pie-chart',
  templateUrl: './report-pie-chart.component.html',
  styleUrls: ['./report-pie-chart.component.css']
})
export class ReportPieChartComponent {
  // Pie
  public pieChartLabels: string[] = ['Abaixo de 18 anos', 'De 18 a 40 anos', 'De 40 a 60 anos', 'Acima de 60 anos'];
  public pieChartData: number[] = [3, 2, 2, 1];
  public pieChartType: String = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public countGender(): void {
    console.log('Gender');
  }

}
