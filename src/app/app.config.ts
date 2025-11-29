import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { withShikiHighlighter } from '@analogjs/content/shiki-highlighter';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { withViewTransitions } from '@angular/router';
import {
  provideNgIconsConfig,
  withContentSecurityPolicy,
  withExceptionLogger,
} from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideContent(withMarkdownRenderer(), withShikiHighlighter()),
    provideFileRouter(withViewTransitions()),
    provideClientHydration(withEventReplay()),
    provideNgIconsConfig(
      {},
      withContentSecurityPolicy(),
      withExceptionLogger()
    ),
  ],
};
