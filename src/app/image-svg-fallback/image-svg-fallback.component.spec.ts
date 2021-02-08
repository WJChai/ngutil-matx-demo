import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSvgFallbackComponent } from './image-svg-fallback.component';

describe('ImageSvgFallbackComponent', () => {
  let component: ImageSvgFallbackComponent;
  let fixture: ComponentFixture<ImageSvgFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSvgFallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSvgFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
