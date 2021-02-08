import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefetchOnStaleComponent } from './refetch-on-stale.component';

describe('RefetchOnStaleComponent', () => {
  let component: RefetchOnStaleComponent;
  let fixture: ComponentFixture<RefetchOnStaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefetchOnStaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefetchOnStaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
