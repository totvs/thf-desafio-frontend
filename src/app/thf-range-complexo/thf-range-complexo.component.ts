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

  ngOnInit() {
    this.menorValor = 1500;
    this.maiorValor = 2500;
    
    this.casas = [
      {'endereco': 'Rua Voluntários, 223',
        'valor': 1100,
        'tipo': 'Apartamento'
      },
      {'endereco': 'Rua Augusta, 1133',
        'valor': 1500,
        'tipo': 'Apartamento'
      },
      {'endereco': 'Rua Flórida, 442',
        'valor': 1700,
        'tipo': 'Apartamento'
      },
      {'endereco': 'Rua Eucalipto, 821',
        'valor': 2200,
        'tipo': 'Casa de Condominio'
      },
      {'endereco': 'Rua Benedita, 13',
        'valor': 2700,
        'tipo': 'Casa'
      }
    ];

    this.atualizaValores(this.menorValor, this.maiorValor);
  }

  atualizaValores(menorAtual:number, maiorAtual:number){
    this.casasFiltradas = [];
    for(let i = 0; i< this.casas.length; i++){
      if(this.casas[i].valor >= menorAtual && this.casas[i].valor <= maiorAtual){
        this.casasFiltradas.push(this.casas[i]);
      }
    }
  
  }

}
