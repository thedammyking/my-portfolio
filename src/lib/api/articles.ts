import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { Article } from '@/types/interfaces/article';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export function getAllArticles() {
  let articles: Article[] = [];
  try {
    const slugs = getFileNames(Resource.Articles);
    articles = slugs
      .map(slug => getDataByFileName<Article>(slug, Resource.Articles))
      .sort(
        (article1, article2) =>
          new Date(article2.date).getTime() - new Date(article1.date).getTime()
      );
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return articles;
  }
}
