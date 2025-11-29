// import { RouteMeta } from '@analogjs/router';

// export const routeMeta: RouteMeta = {
//   redirectTo: '/blog',
//   pathMatch: 'full',
// };

import { Component } from '@angular/core';
import { FeaturedBlogsComponent } from '../components/blog/featured-blogs/featured-blogs.component';
import { AboutMeComponent } from '../components/home/about-me/about-me.component';
import { ExperienceComponent } from '../components/home/experience/experience.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { ProjectsComponent } from '../components/home/projects/projects.component';

@Component({
  selector: 'home',
  imports: [
    HeroComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    FeaturedBlogsComponent,
  ],
  template: `
    <app-hero />
    <app-about-me />
    <app-experience />
    <app-projects />
    <app-featured-blogs />
  `,
})
export default class HomeComponent {}
