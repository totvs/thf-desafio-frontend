import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangeComponent } from '../app/range/range.component'

const routes: Routes = [
  { path: 'range', component: RangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
