import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekpickerRoutingModule } from './weekpicker-routing.module';
import { WeekpickerComponent } from './weekpicker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatxWeekpickerModule } from '@cwj0911/matx-weekpicker';

@NgModule({
  declarations: [WeekpickerComponent],
  imports: [
    CommonModule,
    WeekpickerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatxWeekpickerModule,
  ],
})
export class WeekpickerModule {}
