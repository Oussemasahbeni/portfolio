import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { ContentMetadata } from '../../lib/content-metadata';
import {
  postMetaResolver,
  postTitleResolver,
} from '../../lib/resolvers/resolvers';

export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver,
};

@Component({
  imports: [MarkdownComponent, AsyncPipe, DatePipe],
  host: {
    class: 'block max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
  },
  template: `
    @if (article$ | async; as article) {
    <h1 class=" text-4xl font-bold tracking-tight sm:text-5xl">
      {{ article.attributes.title }}
    </h1>
    <time
      [attr.datetime]="article.attributes.date | date"
      class="order-first mt-1 flex items-center text-base text-rose-500"
    >
      {{ article.attributes.date | date }}</time
    >
    <analog-markdown
      class="pt-8  sm:pt-12 prose dark:prose-invert"
      [content]="article.content"
    />
    }@else {
    <p>Loading...</p>
    }
  `,
})
export default class BlogPost {
  protected readonly article$ = injectContent<ContentMetadata>();
}
