import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CacheManagerService,
  mixinRefetchOnStale,
} from '@cwj0911/ngutil-refetch-on-stale';

export type controller = 'current-time';

class CurrentTimeServiceBase {
  constructor(public cacheManager: CacheManagerService<controller>) {}
}
const _CurrentTimeServiceMixinBase = mixinRefetchOnStale<
  controller,
  typeof CurrentTimeServiceBase
>(CurrentTimeServiceBase, 'current-time');

@Injectable({
  providedIn: 'root',
})
export class CurrentTimeService extends _CurrentTimeServiceMixinBase {
  readonly url = 'https://cache-testing.herokuapp.com/current-time';

  constructor(
    private http: HttpClient,
    cacheManager: CacheManagerService<controller>
  ) {
    super(cacheManager);
  }

  fetchCurrentTime() {
    return this.refetchOnStale((headers) =>
      this.http.get<string>(this.url, { headers })
    );
  }
}
