import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntiFlickerSwitchComponent } from './anti-flicker-switch.component';

const routes: Routes = [{ path: '', component: AntiFlickerSwitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntiFlickerSwitchRoutingModule { }
