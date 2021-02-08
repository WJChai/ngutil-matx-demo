import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectableGridComponent } from './selectable-grid.component';

const routes: Routes = [{ path: '', component: SelectableGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectableGridRoutingModule { }
