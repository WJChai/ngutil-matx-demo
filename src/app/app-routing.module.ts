import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'refetch-on-stale', loadChildren: () => import('./refetch-on-stale/refetch-on-stale.module').then(m => m.RefetchOnStaleModule) }, { path: 'image-svg-fallback', loadChildren: () => import('./image-svg-fallback/image-svg-fallback.module').then(m => m.ImageSvgFallbackModule) }, { path: 'rxjs-operators', loadChildren: () => import('./rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
