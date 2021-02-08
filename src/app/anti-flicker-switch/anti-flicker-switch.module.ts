import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntiFlickerSwitchRoutingModule } from './anti-flicker-switch-routing.module';
import { AntiFlickerSwitchComponent } from './anti-flicker-switch.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AntiFlickerSwitchComponent],
  imports: [CommonModule, AntiFlickerSwitchRoutingModule, MatProgressBarModule],
})
export class AntiFlickerSwitchModule {}
