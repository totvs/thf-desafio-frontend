import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thf-range-complexo',
  templateUrl: './thf-range-complexo.component.html',
  styleUrls: ['./thf-range-complexo.component.css']
})
export class ThfRangeComplexoComponent implements OnInit {

  casas: any[];

  casasFiltradas: any[] = [];

  menorValor: number;
  
  maiorValor:number;

  constructor() { }

  recebeMenorMaior(resposta) {
    this.atualizaValores(resposta.menorAtual, resposta.maiorAtual);
  }

  atualizaValores(menorAtual:number, maiorAtual:number){
    this.casasFiltradas = [];
    for(let i = 0; i< this.casas.length; i++){
      if(this.casas[i].valor >= menorAtual && this.casas[i].valor <= maiorAtual){
        this.casasFiltradas.push(this.casas[i]);
      }
    }
  
  }

  ngOnInit() {
  }

}
