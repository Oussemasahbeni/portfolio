// import { RouteMeta } from '@analogjs/router';

// export const routeMeta: RouteMeta = {
//   redirectTo: '/blog',
//   pathMatch: 'full',
// };

import { Component } from '@angular/core';
import { FeaturedBlogs } from '../components/blog/featured-blogs/featured-blogs';
import { AboutMe } from '../components/home/about-me/about-me.';
import { Experience } from '../components/home/experience/experience.';
import { Hero } from '../components/home/hero/hero.';

@Component({
  selector: 'home',
  imports: [Hero, AboutMe, Experience, FeaturedBlogs],
  template: `
    <app-hero />
    <app-about-me />
    <app-experience />
    <app-featured-blogs />
  `,
})
export default class Home {}
