import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { toISOWeek, weekDayFilter } from '@cwj0911/matx-weekpicker';

@Component({
  selector: 'app-weekpicker',
  templateUrl: './weekpicker.component.html',
  styleUrls: ['./weekpicker.component.scss'],
})
export class WeekpickerComponent implements OnInit {
  startDate = new FormControl();
  toISOWeek = toISOWeek;
  weekDayFilter = weekDayFilter;

  constructor() {}

  ngOnInit(): void {}
}
