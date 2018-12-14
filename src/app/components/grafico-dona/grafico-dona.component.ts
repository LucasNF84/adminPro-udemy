import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {


   // Doughnut
   // tslint:disable-next-line:whitespace
   public doughnutChartData1:number[] = [35, 450, 100];
   // tslint:disable-next-line:whitespace
   public doughnutChartLabels1:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartType1 = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
