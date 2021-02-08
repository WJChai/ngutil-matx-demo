import { Component, OnInit } from '@angular/core';
import { CacheManagerService } from '@cwj0911/ngutil-refetch-on-stale';
import { EMPTY, Observable } from 'rxjs';
import { controller, CurrentTimeService } from './current-time.service';

@Component({
  selector: 'app-refetch-on-stale',
  templateUrl: './refetch-on-stale.component.html',
  styleUrls: ['./refetch-on-stale.component.scss'],
})
export class RefetchOnStaleComponent implements OnInit {
  time$: Observable<string> = EMPTY;

  constructor(
    private http: CurrentTimeService,
    private cacheManager: CacheManagerService<controller>
  ) {}

  ngOnInit(): void {
    this.time$ = this.http.fetchCurrentTime();
  }

  invalidate() {
    this.cacheManager.markAsStale('current-time');
  }
}
