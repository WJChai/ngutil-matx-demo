import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverComponent } from './popover.component';
import { MatxPopoverModule } from '@cwj0911/matx-popover';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    PopoverRoutingModule,
    MatxPopoverModule,
    MatTooltipModule,
  ],
})
export class PopoverModule {}
