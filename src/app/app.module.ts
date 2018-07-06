import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RangeModule } from './components/range/range.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RangeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
