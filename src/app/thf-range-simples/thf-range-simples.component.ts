import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NgForm } from "@angular/forms";
import { ThfRangeComponent } from "../thf-range/thf-range.component";

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

  
  constructor() {}

  ngOnInit() {}

}