import { Component, OnInit } from '@angular/core';
import { CellCoordination } from '@cwj0911/ngutil-selectable-grid';

@Component({
  selector: 'app-selectable-grid',
  templateUrl: './selectable-grid.component.html',
  styleUrls: ['./selectable-grid.component.scss'],
})
export class SelectableGridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tableSelected = 'try select the table cells using mouse';
  updateTableSelected({
    first,
    last,
  }: {
    first: CellCoordination;
    last: CellCoordination;
  }) {
    this.tableSelected = `selected from left-top ${first.row},${first.col} to bottom-right ${last.row},${last.col}`;
  }

  gridSelected = 'try select the grid cells using mouse';
  updateGridSelected({
    first,
    last,
  }: {
    first: CellCoordination;
    last: CellCoordination;
  }) {
    this.gridSelected = `selected from left-top ${first.row},${first.col} to bottom-right ${last.row},${last.col}`;
  }
}
