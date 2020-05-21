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

    //aqui chama método que exibe data hora em tempo real
    setInterval(() => this.atualizarDataHora(), 1000);
  }

  ngOnInit(): void {

  }

  atualizarDataHora(): void {
    this.dataHora = new Date();
  }

}
