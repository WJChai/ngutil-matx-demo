import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIssuePaginatedAsyncAutocompleteComponent } from './github-issue-paginated-async-autocomplete.component';

describe('GithubIssuePaginatedAsyncAutocompleteComponent', () => {
  let component: GithubIssuePaginatedAsyncAutocompleteComponent;
  let fixture: ComponentFixture<GithubIssuePaginatedAsyncAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubIssuePaginatedAsyncAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssuePaginatedAsyncAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
