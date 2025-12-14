import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  host: {
    class:
      'block  relative min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8',
  },

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
