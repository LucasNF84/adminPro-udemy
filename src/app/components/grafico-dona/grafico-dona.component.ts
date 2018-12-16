import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

   // Doughnut
   // tslint:disable-next-line:whitespace
   @Input() doughnutChartData1:number[];  
   // tslint:disable-next-line:whitespace
   @Input() doughnutChartLabels1:string[];
   public doughnutChartType1 ='doughnut';
   @Input() leyenda;

  constructor() { }

  ngOnInit() {
  }

}
