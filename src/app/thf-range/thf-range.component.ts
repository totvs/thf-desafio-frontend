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
    this.inicializaMinimoMaximo();
    this.ajustaValorInicio();
    this.ajustaValorFim();

    this.menorValorRange = this.inicio;
    this.maiorValorRange = this.fim;
    this.calculaRange(this.inicio, this.fim);
  }

  ngOnChanges(){
    this.menorValorRange = this.inicio;
    this.maiorValorRange = this.fim;
    this.htmlInputRangeOriginal.nativeElement.value = this.inicio;
    this.htmlInputRangeAuxiliar.nativeElement.value = this.fim;
    this.atualizaValoresSemEmitter();
  }

  public atualizaValoresSemEmitter() {
    this.atualiza();
  }

  private atualiza(){
    this.menorValorRange = this.calculaMenorValorRange();
    this.maiorValorRange = this.calculaMaiorValorRange();
    this.calculaRange(this.menorValorRange, this.maiorValorRange);
  }

  private inicializaMinimoMaximo(){
    if(this.minimo == undefined){
      this.minimo = 0;
    }

    if(this.maximo == undefined){
      this.maximo = 100;
    }
  }

  private ajustaValorInicio(){
    if(this.minimo > this.inicio || this.inicio == undefined){
      this.inicio = this.minimo;
    }
  }

  private ajustaValorFim(){
    if(this.maximo < this.fim || this.fim == undefined){
      this.fim = this.maximo;
    }
  }

  private calculaRange(menorValorRange: number, maiorValorRange: number) {
    let expressaoLow = (menorValorRange - this.minimo)/((this.maximo-this.minimo) * 0.01);
    let expressaoHigh = (maiorValorRange - this.minimo)/((this.maximo-this.minimo) * 0.01);

    this.htmlInputRangeAuxiliar.nativeElement.style.setProperty("--low", expressaoLow + "%");
    this.htmlInputRangeAuxiliar.nativeElement.style.setProperty("--high", expressaoHigh + "%");

  }

  private calculaMenorValorRange(): number {
    return Math.min(this.htmlInputRangeOriginal.nativeElement.value, this.htmlInputRangeAuxiliar.nativeElement.value);
  };

  private calculaMaiorValorRange(): number {
    return Math.max(this.htmlInputRangeOriginal.nativeElement.value, this.htmlInputRangeAuxiliar.nativeElement.value);
  }
}
