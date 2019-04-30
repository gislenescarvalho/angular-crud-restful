import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoughnutChartComponent } from './report-doughnut-chart.component';

describe('ReportDoughnutChartComponent', () => {
  let component: ReportDoughnutChartComponent;
  let fixture: ComponentFixture<ReportDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
