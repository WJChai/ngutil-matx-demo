import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedAsyncAutocompleteRoutingModule } from './paginated-async-autocomplete-routing.module';
import { PaginatedAsyncAutocompleteComponent } from './paginated-async-autocomplete.component';
import { GithubIssuePaginatedAsyncAutocompleteComponent } from './github-issue-paginated-async-autocomplete/github-issue-paginated-async-autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    PaginatedAsyncAutocompleteComponent,
    GithubIssuePaginatedAsyncAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    PaginatedAsyncAutocompleteRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
})
export class PaginatedAsyncAutocompleteModule {}
