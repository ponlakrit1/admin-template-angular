import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { MatCardModule } from '@angular/material/card'; 
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartUtils from '../../utils/chart-utils';
import { Chart, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public isBrowser: boolean;

  public chartDoughnutOptions = ChartUtils.getDoughnutDefaultOptions();
  public chartDoughnutLabels: string[];
  public chartDoughnutDatasets: ChartConfiguration<'doughnut'>['data']['datasets'];

  public chartLineOptions = ChartUtils.getLineDefaultOptions();
  public chartLineLabels: string[];
  public chartLineDatasets: ChartConfiguration<'line'>['data']['datasets'];

  public chartBarVOptions = ChartUtils.getBarVerticalOptions();
  public chartBarVLabels: string[];
  public chartBarVDatasets: ChartConfiguration<'bar'>['data']['datasets'];

  public chartBarHOptions = ChartUtils.getBarHorizontalOptions();
  public chartBarHLabels: string[];
  public chartBarHDatasets: ChartConfiguration<'bar'>['data']['datasets'];

  public chartBarDataLebel: ChartConfiguration<'bar'>['plugins'];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    Chart.register(...registerables, ChartDataLabels);

    this.isBrowser = isPlatformBrowser(platformId);

    this.chartDoughnutLabels = [];
    this.chartDoughnutDatasets = [];

    this.chartLineLabels = [];
    this.chartLineDatasets = [];

    this.chartBarVLabels = [];
    this.chartBarVDatasets = [];

    this.chartBarHLabels = [];
    this.chartBarHDatasets = [];
  }

  ngOnInit(): void {
    const chartLabel = [
      "Label 1",
      "Label 2",
      "Label 3",
      "Label 4",
      "Label 5",
    ];
    const chartData = [
      {
        data: [10, 25, 18, 29, 33], 
        backgroundColor: [ '#16E716', '#FFFC13', '#FF9900', '#FF0000', '#4b49ac' ],
        label: 'Amount',
      },
    ];

    this.chartDoughnutLabels = chartLabel;
    this.chartDoughnutDatasets = chartData;

    this.chartLineLabels = chartLabel;
    this.chartLineDatasets = chartData;

    this.chartBarVLabels = chartLabel;
    this.chartBarVDatasets = chartData;

    this.chartBarHLabels = chartLabel;
    this.chartBarHDatasets = chartData;
  }

}
