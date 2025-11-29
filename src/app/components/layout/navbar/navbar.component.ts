import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  model,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { radixHamburgerMenu } from '@ng-icons/radix-icons';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, HlmButtonImports, HlmIconImports, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  providers: [provideIcons({ radixHamburgerMenu })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
  /**
   * Determine the platform.
   */
  private readonly platform = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  /**
   * Whether the mobile menu is open.
   */
  readonly menuOpen = model(false);

  readonly navigation = signal([
    {
      title: 'Home',
      link: '/',
      ariaLabel: 'Home page',
    },
    {
      title: 'Blogs',
      link: '/blog',
      ariaLabel: 'Blogs page',
    },
  ]);

  private clickListener?: (event: Event) => void;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      // Close mobile menu when clicking outside
      this.clickListener = (event: Event) => {
        const target = event.target as HTMLElement;
        const navbar = this.document.querySelector('app-navbar');

        if (this.menuOpen() && navbar && !navbar.contains(target)) {
          this.menuOpen.set(false);
        }
      };

      this.document.addEventListener('click', this.clickListener);
    }
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.document.removeEventListener('click', this.clickListener);
    }
  }

  toggle(): void {
    this.menuOpen.update((open) => !open);
  }
}
