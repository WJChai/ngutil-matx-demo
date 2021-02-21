import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckableAsyncTreeComponent } from './checkable-async-tree.component';

const routes: Routes = [{ path: '', component: CheckableAsyncTreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckableAsyncTreeRoutingModule { }
