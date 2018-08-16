import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThfRangeComponent } from './thf-range/thf-range.component';
import { ThfRangeSimplesComponent } from './thf-range-simples/thf-range-simples.component';


@NgModule({
  declarations: [
    AppComponent,
    ThfRangeComponent,
    ThfRangeSimplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
