import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.sass']
})
export class DataHoraComponent implements OnInit {

  public dataHora: Date

  constructor() {
    this.dataHora = new Date();
  }

  ngOnInit(): void {
  }

}
