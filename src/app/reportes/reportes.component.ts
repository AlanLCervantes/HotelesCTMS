import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js/auto';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Chart("myChart", {    
      type: 'line',
        data: {
          labels: ['SENCILLA', 'DOBLE', 'TRIPLE'],
            datasets: [{
              data: [12, 19, 5],
              backgroundColor:[
              ],
              pointBackgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)'
              ],
              borderColor: "gray",
              pointBorderWidth: 5,
              pointBorderColor: [
                
                'rgba(255, 99, 132, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)'
              ], 
              borderWidth: 2
            }],
            
        },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          },
        },
        plugins:{
          legend:{
            display: false
          }
        },
        scales: {
          y: {
            ticks:{
              color: "white"
            },
            grid:{
              color: "white"
            },
            beginAtZero: true
          },
          x: {
            ticks:{
              color: "white"
            }
          }
        }
      }
    });
  }

}
