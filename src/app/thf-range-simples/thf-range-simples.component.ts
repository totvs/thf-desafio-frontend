import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thf-range-simples',
  templateUrl: './thf-range-simples.component.html',
  styleUrls: ['./thf-range-simples.component.css']
})
export class ThfRangeSimplesComponent implements OnInit {

  public label: string;

  public minimo: number;

  public maximo: number;

  public inicio: number;

  public fim: number;

  public step: number;

  public comIndicadores: boolean;

  public disabled: boolean;

  public moeda: boolean;

  constructor() { }

  ngOnInit() {
  }

}
