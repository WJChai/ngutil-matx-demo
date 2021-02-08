import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefetchOnStaleComponent } from './refetch-on-stale.component';

const routes: Routes = [{ path: '', component: RefetchOnStaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefetchOnStaleRoutingModule { }
