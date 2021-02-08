import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefetchOnStaleRoutingModule } from './refetch-on-stale-routing.module';
import { RefetchOnStaleComponent } from './refetch-on-stale.component';

@NgModule({
  declarations: [RefetchOnStaleComponent],
  imports: [CommonModule, RefetchOnStaleRoutingModule],
})
export class RefetchOnStaleModule {}
