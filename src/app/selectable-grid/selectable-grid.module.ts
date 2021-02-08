import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectableGridRoutingModule } from './selectable-grid-routing.module';
import { SelectableGridComponent } from './selectable-grid.component';
import { NgutilSelectableGridModule } from '@cwj0911/ngutil-selectable-grid';

@NgModule({
  declarations: [SelectableGridComponent],
  imports: [
    CommonModule,
    SelectableGridRoutingModule,
    NgutilSelectableGridModule,
  ],
})
export class SelectableGridModule {}
