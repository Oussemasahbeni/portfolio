import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons';
import { ButtonVariants, HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

export interface ActionButton {
  title: string;
  icon: string;
  variant: ButtonVariants['variant'];
  link: string;
}

@Component({
  selector: 'app-hero',
  imports: [HlmButtonImports, HlmIconImports],
  templateUrl: './hero.component.html',
  host: {
    class:
      'block  relative min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8',
  },
  providers: [provideIcons({ radixGithubLogo, radixLinkedinLogo })],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly actionButtons = signal<ActionButton[]>([
    {
      title: 'GitHub',
      icon: 'radixGithubLogo',
      variant: 'default',
      link: 'https://github.com/Oussemasahbeni',
    },
    {
      title: 'LinkedIn',
      icon: 'radixLinkedinLogo',
      variant: 'outline',
      link: 'https://www.linkedin.com/in/oussema-sahbeni-3b4b2521b/',
    },
  ]);
}
