import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFlickerSwitchComponent } from './anti-flicker-switch.component';

describe('AntiFlickerSwitchComponent', () => {
  let component: AntiFlickerSwitchComponent;
  let fixture: ComponentFixture<AntiFlickerSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiFlickerSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiFlickerSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
