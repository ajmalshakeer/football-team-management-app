import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-popularity_table',
  templateUrl: './popularity_table.component.html',
  styleUrls: ['./popularity_table.component.css'],
})
export class Popularity_tableComponent implements OnInit, OnDestroy {
  realmadrid: number = 21;
  popularityChart: any;

  ngOnInit() {
    this.popularity_chart();
  }

  ngOnDestroy(): void {
    this.Destroychart();
  }

  popularity_chart() {
    this.Destroychart();
    this.popularityChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: [
          'Real Madrid',
          'Barcelona',
          'Manchester City',
          'Manchester United',
          'Bayern Munich',
          'Paris Saint-Germain',
          'Liverpool',
          'Chelsea',
          'Juventus',
          'Arsenal',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [this.realmadrid, 19, 17, 13, 15, 10, 18, 20, 17, 12],
            backgroundColor: ['rgba(201, 203, 207, 0.2)','rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(249, 9, 9, 0.5)','rgba(255, 206, 86, 0.2)','rgba(54, 162, 235, 0.5)','rgba(155, 8, 8,0.5)','rgba(153, 102, 255, 0.2)','rgba(0, 0, 0, 0.5)','rgba(255, 205, 86, 0.5)',
            ],
            borderColor: ['rgba(201, 203, 207, 1)','rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(249, 9, 9, 0.99)','rgba(255, 206, 86, 1)','rgba(54, 162, 235, 1)','rgba(155, 8, 8, 1)','rgba(153, 102, 255, 1)','rgba(0, 0, 0, 1)','rgba(255, 205, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } },
        },
        plugins: {
          title: {
            display: true,
            text: 'Popular Football clubs',
            font: { size: 15 },
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }

  Destroychart() {
    if (this.popularityChart) {
      this.popularityChart.destroy();
    }
  }
}
