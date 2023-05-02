import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  public chart: any;


  ngOnInit() {
    this.createChart();
  }
  createChart(){
    const currentDate: Date = new Date();
  const dateString: string = currentDate.toISOString().substring(0, 10);
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [dateString, dateString, dateString,dateString  ,
								  ], 
	       datasets: [
          {
            label: "Existe",
            data: ['467','576', '572', '79', 
								],
            backgroundColor: 'blue'
          },
          {
            label: "Availble",
            data: ['542', '542', '536', '327',],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
