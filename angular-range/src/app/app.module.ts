import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSliderComponent } from './angular-slider/angular-slider.component';
import { AngularSliderComplexComponent } from './angular-slider-complex/angular-slider-complex.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularSliderComponent,
    AngularSliderComplexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
