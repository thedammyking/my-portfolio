import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { Project } from '@/types/interfaces/project';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export const getAllProjects = () => {
  let projects: Project[] = [];
  try {
    const slugs = getFileNames(Resource.Projects);
    projects = slugs
      .map(slug => getDataByFileName<Project>(slug, Resource.Projects))
      .sort((projects1, projects2) => Number(projects1.year) - Number(projects2.year));
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return projects;
  }
};
