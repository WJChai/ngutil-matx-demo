import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageSvgFallbackComponent } from './image-svg-fallback.component';

const routes: Routes = [{ path: '', component: ImageSvgFallbackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSvgFallbackRoutingModule { }
