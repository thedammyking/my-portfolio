import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export function getAllArticles() {
  let articles: { [x: string]: any }[] = [];
  try {
    const slugs = getFileNames(Resource.Articles);
    articles = slugs
      .map(slug => getDataByFileName<{ [x: string]: any }>(slug, Resource.Articles))
      .sort((article1, article2) => (article1.from > article2.from ? -1 : 1));
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return articles;
  }
}
