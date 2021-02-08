import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedAsyncAutocompleteComponent } from './paginated-async-autocomplete.component';

describe('PaginatedAsyncAutocompleteComponent', () => {
  let component: PaginatedAsyncAutocompleteComponent;
  let fixture: ComponentFixture<PaginatedAsyncAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatedAsyncAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedAsyncAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
