import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export const getAllProjects = () => {
  let projects: { [x: string]: any }[] = [];
  try {
    const slugs = getFileNames(Resource.Projects);
    projects = slugs
      .map(slug => getDataByFileName<{ [x: string]: any }>(slug, Resource.Projects))
      .sort((projects1, projects2) => Number(projects1.year) - Number(projects2.year));
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return projects;
  }
};
