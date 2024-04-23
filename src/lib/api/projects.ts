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
      .sort(
        (projects1, projects2) =>
          new Date(projects2.year).getTime() - new Date(projects1.year).getTime()
      );
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return projects;
  }
};
