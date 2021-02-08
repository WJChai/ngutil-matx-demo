import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-svg-fallback',
  templateUrl: './image-svg-fallback.component.html',
  styleUrls: ['./image-svg-fallback.component.scss'],
})
export class ImageSvgFallbackComponent implements OnInit {
  fallbackSvg = `<svg viewBox="0 0 50 50" style="background-color: blue" fill="yellowgreen" xmlns="http://www.w3.org/2000/svg">
  <text x="50%" y="12" dominant-baseline="middle" text-anchor="middle">
    A long
  </text>
  <text x="50%" y="25" dominant-baseline="middle" text-anchor="middle">lost</text>
  <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle">kitty</text>
</svg>`;

  constructor() {}

  ngOnInit(): void {}
}
