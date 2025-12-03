import { isPlatformBrowser } from '@angular/common';
import { Component, DOCUMENT, inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-reading-progress',
  imports: [],
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
  template: `
    <div class="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        class="h-full bg-blue-400 transition-transform duration-75 ease-out origin-left"
        [style.transform]="'scaleX(' + readingProgress() / 100 + ')'"
      ></div>
    </div>
  `,
})
export class ReadingProgress {

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);


  readonly readingProgress = signal(0);

  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop =
        window.scrollY || this.document.documentElement.scrollTop;
      const height =
        this.document.documentElement.scrollHeight -
        this.document.documentElement.clientHeight;

      if (height > 0) {
        const scrolled = (scrollTop / height) * 100;
        this.readingProgress.set(scrolled);
      }
    }
  }
}
