import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPieChartComponent } from './report-pie-chart.component';

describe('ReportPieChartComponent', () => {
  let component: ReportPieChartComponent;
  let fixture: ComponentFixture<ReportPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
