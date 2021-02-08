import { Component, OnInit } from '@angular/core';
import { SelectionList } from '@cwj0911/ngutil-selection-list';

type item = { id: string; name: string };
const getItem: (i: number) => item = (i: number) => ({
  id: `id ${i}`,
  name: `name ${i}`,
});

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
})
export class SelectionListComponent implements OnInit {
  public list = new SelectionList<item, string>();
  items = Array.from({ length: 20 }).map((_, i) => getItem(i));

  constructor() {}

  ngOnInit(): void {}

  toggle(x: item) {
    this.list.toggle(x);
  }
}
