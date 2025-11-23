import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { provideIcons } from '@ng-icons/core';
import { lucideLanguages } from '@ng-icons/lucide';
import { radixCheck } from '@ng-icons/radix-icons';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
  selector: 'app-language',
  imports: [
    HlmButtonImports,
    BrnMenuTrigger,
    HlmMenu,
    HlmMenuItem,
    HlmIconImports,
    HlmIconImports,
  ],
  template: `
    <button
      hlmBtn
      [brnMenuTriggerFor]="menu"
      title="Change language"
      size="icon"
      variant="outline"
      class="size-8"
    >
      <ng-icon name="lucideLanguages" hlm size="sm" />
    </button>

    <ng-template #menu>
      <hlm-menu class="min-w-32">
        <button
          hlmMenuItem
          (click)="setLanguage('en')"
          [class.font-semibold]="activeLang() === 'en'"
        >
          <span>English</span>

          @if(activeLang() === 'en') {
          <ng-icon name="radixCheck" hlm />
          }
        </button>
        <button
          hlmMenuItem
          (click)="setLanguage('fr')"
          [class.font-semibold]="activeLang() === 'fr'"
        >
          <span>Français</span>
          @if(activeLang() === 'fr') {
          <ng-icon name="radixCheck" hlm />
          }
        </button>
      </hlm-menu>
    </ng-template>
  `,
  providers: [
    provideIcons({
      lucideLanguages,
      radixCheck,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  private translocoService = inject(TranslocoService);

  readonly activeLang = signal(this.translocoService.getActiveLang());

  setLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
    this.activeLang.set(lang);
  }
}
