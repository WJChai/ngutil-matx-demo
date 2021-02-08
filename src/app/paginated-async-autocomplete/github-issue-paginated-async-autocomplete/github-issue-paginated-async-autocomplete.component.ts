import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { mixinPaginatedAsyncAutocomplete } from '@cwj0911/matx-paginated-async-autocomplete';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface Issue {
  state: string;
  title: string;
}

class GithubIssuePaginatedAsyncAutocompleteComponentBase {
  constructor(private httpClient: HttpClient) {}

  fetchOptions(pageIndex: number, pageSize: number, query: string) {
    const href = 'https://api.github.com/search/issues';
    let params = new HttpParams();
    if (query != '') {
      params = params.set('q', query);
    }
    params = params.set('page', pageIndex.toString());
    params = params.set('per_page', pageSize.toString());
    return this.httpClient
      .get<{
        total_count: number;
        incomplete_results: false;
        items: Issue[];
      }>(
        `${href}?q=${query} in :title repo:angular/components&page=${pageIndex}&per_page=${pageSize}`
      )
      .pipe(
        map((result) => ({
          pageIndex,
          pageSize,
          hasNextPage: !result.incomplete_results,
          query,
          items: result.items,
          totalCount: result.total_count,
        }))
      );
  }
  options: Issue[] = [];
}

const _GithubIssuePaginatedAsyncAutocompleteComponentMixinBase = mixinPaginatedAsyncAutocomplete<
  Issue,
  typeof GithubIssuePaginatedAsyncAutocompleteComponentBase
>(GithubIssuePaginatedAsyncAutocompleteComponentBase);

@Component({
  selector: 'app-github-issue-paginated-async-autocomplete',
  templateUrl: './github-issue-paginated-async-autocomplete.component.html',
  styleUrls: ['./github-issue-paginated-async-autocomplete.component.scss'],
})
export class GithubIssuePaginatedAsyncAutocompleteComponent
  extends _GithubIssuePaginatedAsyncAutocompleteComponentMixinBase
  implements OnInit {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  @ViewChild('auto', { static: true }) autocomplete!: MatAutocomplete;

  @Input() set searchText(value: any) {
    if (typeof value !== 'string') return;
    this.query = value;
  }

  ngOnInit(): void {
    this.initPaginatedAsyncAutocomplete(this.autocomplete, 10);
  }
}
