import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export const getAllProjects = () => {
  let projects: { [x: string]: any }[] = [];
  try {
    const slugs = getFileNames(Resource.Projects);
    projects = slugs
      .map(slug => getDataByFileName<{ [x: string]: any }>(slug, Resource.Projects))
      .sort((projects1, projects2) => (projects1.year > projects2.year ? -1 : 1));
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return projects;
  }
};
