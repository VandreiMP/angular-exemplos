import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.sass']
})
export class IncrementarDecrementarComponent implements OnInit {

  numero: number;

  constructor() { this.numero = 0 }

  ngOnInit(): void {
  }

  incrementaNumero(): void {
      this.numero += 1;

  }

  decrementaNumero(): void {

    this.numero -= 1;

  }

}
