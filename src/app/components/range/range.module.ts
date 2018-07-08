import { RangeComponent } from './range.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [ RangeComponent ],
    declarations: [ RangeComponent ],
    providers: [ ],
})
export class RangeModule { }
