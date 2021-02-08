import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatedAsyncAutocompleteComponent } from './paginated-async-autocomplete.component';

const routes: Routes = [{ path: '', component: PaginatedAsyncAutocompleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatedAsyncAutocompleteRoutingModule { }
