import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginated-async-autocomplete',
  templateUrl: './paginated-async-autocomplete.component.html',
  styleUrls: ['./paginated-async-autocomplete.component.scss'],
})
export class PaginatedAsyncAutocompleteComponent implements OnInit {
  control = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
