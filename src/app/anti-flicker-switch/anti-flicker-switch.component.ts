import { Component, OnInit } from '@angular/core';
import { AntiFlickerSwitch } from '@cwj0911/ngutil-anti-flicker-switch';

@Component({
  selector: 'app-anti-flicker-switch',
  templateUrl: './anti-flicker-switch.component.html',
  styleUrls: ['./anti-flicker-switch.component.scss'],
})
export class AntiFlickerSwitchComponent implements OnInit {
  public switch = new AntiFlickerSwitch();

  constructor() {}

  ngOnInit(): void {}
}
