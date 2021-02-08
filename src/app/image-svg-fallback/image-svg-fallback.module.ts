import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSvgFallbackRoutingModule } from './image-svg-fallback-routing.module';
import { ImageSvgFallbackComponent } from './image-svg-fallback.component';
import { ImageSvgFallbackModule as M } from '@cwj0911/ngutil-image-svg-fallback';

@NgModule({
  declarations: [ImageSvgFallbackComponent],
  imports: [CommonModule, ImageSvgFallbackRoutingModule, M],
})
export class ImageSvgFallbackModule {}
