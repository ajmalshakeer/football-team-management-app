import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  chartRef: any;
  myChart:any;

  constructor() { 
    
  }

  ngOnInit() {
    this.winningratiochart();
  }
  ngOnDestroy(): void {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

winningratiochart(){
  if (this.myChart) {
    this.myChart.destroy();
  }
  this. myChart = new Chart('polarChart', {
    type: 'polarArea',
    data: {
        labels: ['Matches Won', 'MatchesLost', 'Draw Matches', ],
        datasets: [{
            label: '# of Votes',
            data: [22, 18, 15,],
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
            borderWidth: 1
        }]
    },
    options: {
      scales: {
        x: {
            grid: {
                display: false 
            }
        },
        y: {
            grid: {
                display: false 
            }
        }
    },
    
        plugins: {
            title: {
                display: true,
                text: 'Team Winning Ratio',
                font: {
                  size: 15 // Set font size of the title
              }
            },
            legend: {
                display: false
            }
        }
    }
  });
}
}
