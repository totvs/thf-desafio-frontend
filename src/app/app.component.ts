import { Component, OnInit } from '@angular/core';
import { IRangeConfig } from './interfaces/range.config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public rangeConfig1: IRangeConfig;
  public rangeConfig2: IRangeConfig;

  ngOnInit() {
    this.rangeConfig1 = {
      label: 'Simples',
      minValue: 0,
      maxValue: 100,
      disabled: false
    };

    this.rangeConfig2 = {
      minValue: 0,
      maxValue: 100,
      disabled: true
    };
  }


}
