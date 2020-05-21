import { Component, OnInit } from '@angular/core';
import { Ilivro } from './ilivro.model';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.sass']
})
export class LivrosComponent implements OnInit {

  livros: Ilivro[];

  constructor() {
    this.livros = [
      {
        titulo: 'JavaScript: O Guia Definitivo',
        autor: 'David Flanagan'
      },
      {
        titulo: 'O Melhor do JavaScript',
        autor: 'Douglas Cockford'
      },
      {
        titulo: 'JavaScript Design Patterns',
        autor: 'Addy Osmani'
      }
    ]
  }

  ngOnInit(): void {
  }

}
