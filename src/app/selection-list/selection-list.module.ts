import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionListRoutingModule } from './selection-list-routing.module';
import { SelectionListComponent } from './selection-list.component';


@NgModule({
  declarations: [SelectionListComponent],
  imports: [
    CommonModule,
    SelectionListRoutingModule
  ]
})
export class SelectionListModule { }
