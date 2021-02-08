import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';
import { RxjsOperatorsComponent } from './rxjs-operators.component';


@NgModule({
  declarations: [RxjsOperatorsComponent],
  imports: [
    CommonModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
