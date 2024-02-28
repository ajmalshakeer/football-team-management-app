import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  chartRef: any;
  DashboardChart: any;

  ngOnInit() {
    this.winningRatioChart();
  }

  ngOnDestroy(): void {
    this.DestroyChart();
  }

  winningRatioChart() {
    this.DestroyChart();

    this.DashboardChart = new Chart('polarChart', {
      type: 'line',
      data: {
        labels: ['Won', 'Lost', 'Draw'],
        datasets: [
          {
            label: '# of Votes',
            data: [22, 8, 12],
            backgroundColor: [
              'rgba(33, 247, 15, 0.5)',
              'rgba(233, 15, 15, 0.5)',
              'rgba(167, 167, 167, 0.5)',
            ],
            borderColor: [
              'rgba(33, 247, 15, 1)',
              'rgba(233, 15, 15, 1)',
              'rgba(167, 167, 167, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } },
        },

        plugins: {
          title: {
            display: true,
            text: 'Game Statistic',
            font: { size: 15 },
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }

  DestroyChart() {
    if (this.DashboardChart) {
      this.DashboardChart.destroy();
    }
  }
}
