import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { Experience } from '@/types/interfaces/experience';

import { getDataByFileName, getFileNames } from '../apiUtils';

export function getAllExperience() {
  let experiences: Experience[] = [];
  try {
    const slugs = getFileNames(Resource.Experience);
    experiences = slugs
      .map(slug => getDataByFileName<Experience>(slug, Resource.Experience))
      .sort(
        (experience1, experience2) =>
          new Date(experience2.from).getTime() - new Date(experience1.from).getTime()
      );
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return experiences;
  }
}
