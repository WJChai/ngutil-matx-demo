import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekpickerComponent } from './weekpicker.component';

const routes: Routes = [{ path: '', component: WeekpickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekpickerRoutingModule { }
