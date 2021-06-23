import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-token',
  templateUrl: './chart-token.component.html',
  styleUrls: ['./chart-token.component.scss']
})
export class ChartTokenComponent implements OnInit {
  @Input() tokenId: any;
  canvas: any;
  ctx: any;
  // data: Array<any>;

  datacanva: Array<any>;
  labelcanva: Array<any>;
  dataPrice: Array<number>;
  dataTime: Array<number>;
  Price: Array<any>;
  nowDate: string;
  trenteDate: string;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    var today = new Date();
    var dd = ("0" + today.getDate()).slice(-2);
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var yyyy = today.getFullYear();
    // console.log(yyyy+'-'+mm+'-'+dd);
    this.nowDate = yyyy+'-'+mm+'-'+dd;

    var trentedays = new Date(today.getTime() - 30*24*60*60*1000);
    // console.log(typeof trentedays)
    var dd30 = ("0" + trentedays.getDate()).slice(-2);
    var mm30 = ("0" + (trentedays.getMonth() + 1)).slice(-2);
    var yyyy30 = trentedays.getFullYear();
    // console.log(yyyy30+'-'+mm30+'-'+dd30);
    this.trenteDate = yyyy30+'-'+mm30+'-'+dd30;

    if(this.tokenId) {
      // console.log(this.tokenId)

      setTimeout(()=>{
    this.http.get('https://api.nomics.com/v1/currencies/sparkline?key=eb2ee570072c49c57d6f54c3f7a5cabb&ids='+this.tokenId+'&start='+this.trenteDate+'T00%3A00%3A00Z&end='+this.nowDate+'T00%3A00%3A00Z')
    .subscribe(Response => {
        this.Price = Response[0];
        this.dataTime = this.Price['timestamps'];
        this.dataPrice = this.Price['prices'];
      // console.log(this.dataPrice)
      // console.log(this.dataTime)
      const el = <HTMLCanvasElement> document.getElementById('chart');
      var chart = el.getContext("2d");

      const gradient = chart.createLinearGradient(0, 0, 0, 450);

      gradient.addColorStop(0, 'rgba(131, 46, 131, 0.5)');
      gradient.addColorStop(0.5, 'rgba(131, 46, 131, 0.25)');
      gradient.addColorStop(1, 'rgba(131, 46, 131, 0)');

      var data  = {

          labels: this.dataTime,
          datasets: [{
            label: 'Price',
            backgroundColor: gradient,
            pointBackgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#832e83',
            data: this.dataPrice,
          }]
      };


      var options = {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          easing: 'easeInOutQuad',
          duration: 520
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'rgba(200, 200, 200, 0.05)',
              lineWidth: 1
            }
          }],
          yAxes: [{
            gridLines: {
              color: 'rgba(200, 200, 200, 0.08)',
              lineWidth: 1
            }
          }]
        },
        elements: {
          line: {
            tension: 0.4
          }
        },
        legend: {
          display: false,
        },
        point: {
          backgroundColor: 'white'
        },
        tooltips: {
          enabled: false,
          titleFontFamily: 'Open Sans',
          backgroundColor: 'rgba(0,0,0,0.3)',
          titleFontColor: 'red',
          caretSize: 5,
          cornerRadius: 2,
          xPadding: 10,
          yPadding: 10
        }
      };


      var chartInstance = new Chart(chart, {
          type: 'line',
          data: data,
          options: options
      });
    });
  },1000);
  }

  }


}
