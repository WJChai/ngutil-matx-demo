import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckableAsyncTreeComponent } from './checkable-async-tree.component';

describe('CheckableAsyncTreeComponent', () => {
  let component: CheckableAsyncTreeComponent;
  let fixture: ComponentFixture<CheckableAsyncTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckableAsyncTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckableAsyncTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
