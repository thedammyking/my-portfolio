import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { Experience } from '@/types/interfaces/experience';

import { getDataByFileName, getFileNames } from '../mdFileUtils';

export function getAllExperience() {
  let experience: Experience[] = [];
  try {
    const slugs = getFileNames(Resource.Experience);
    experience = slugs
      .map(slug => getDataByFileName<Experience>(slug, Resource.Experience))
      .sort((experience1, experience2) => Number(experience2.from) - Number(experience1.from));
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return experience;
  }
}
