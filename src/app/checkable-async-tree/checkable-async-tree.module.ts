import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CheckableAsyncTreeModule as M } from '@cwj0911/matx-checkable-async-tree';
import { CheckableAsyncTreeRoutingModule } from './checkable-async-tree-routing.module';
import { CheckableAsyncTreeComponent } from './checkable-async-tree.component';

@NgModule({
  declarations: [CheckableAsyncTreeComponent],
  imports: [
    CommonModule,
    CheckableAsyncTreeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    M,
    MatIconModule,
  ],
})
export class CheckableAsyncTreeModule {}
