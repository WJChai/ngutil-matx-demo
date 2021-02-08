import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, interval, Observable, throwError } from 'rxjs';
import { map, scan, take, takeUntil } from 'rxjs/operators';
import { backoffRetry } from '@cwj0911/ngutil-rxjs-operators';
import { mixinDestroyed } from '@cwj0911/ngutil-common-behavior-mixins';

class Base {}
const _MixinBase = mixinDestroyed(Base);

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent
  extends _MixinBase
  implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  logs: string[] = [];
  timer$: Observable<string> = EMPTY;

  ngOnInit(): void {
    throwError(new Error('deliberate error'))
      .pipe(
        backoffRetry(() => this.logs.push(`error: retrying... ${new Date()}`)),
        takeUntil(this.destroyed)
      )
      .subscribe();

    this.timer$ = interval(1000).pipe(
      take(10),
      scan((acc) => acc + 1, 0),
      map((i) => i.toString())
    );
  }

  ngOnDestroy(): void {
    this._markDestroyed();
  }
}
