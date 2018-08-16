import { Component, OnInit, Input, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'thf-range',
  templateUrl: './thf-range.component.html',
  styleUrls: ['./thf-range.component.css']
})
export class ThfRangeComponent implements OnInit {

  @Input("t-min")
  public minimo: number;

  @Input("t-max")
  public maximo: number;

  @Input("t-inicio")
  public inicio: number;

  @Input("t-fim")
  public fim: number;

  @Input("t-step")
  public step: number;

  @Input("t-com-indicadores")
  public comIndicadores: boolean;

  @Input("t-disabled")
  public disabled: boolean;
  
  @Input("t-moeda")
  public moeda: boolean;

  @Input("t-label")
  public label: string;

  @Output("t-change") 
  public menorMaiorValorRangeEmitter = new EventEmitter();

  @ViewChild("htmlInputRangeOriginal") 
  private htmlInputRangeOriginal: ElementRef;
  
  @ViewChild("htmlInputRangeAuxiliar") 
  private htmlInputRangeAuxiliar: ElementRef;

  private menorValorRange: number;

  private maiorValorRange: number;

  constructor() { }

  ngOnInit() {
  }

}
