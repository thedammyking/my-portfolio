import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { Skills, Stack, Summary } from '@/types/interfaces/Resume';

import { getDataByFileName } from '../apiUtils';

export const getStackData = () => {
  let data = null;
  try {
    data = getDataByFileName<Stack>('stack', Resource.Resume);
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return data;
  }
};
export const getSkillsData = () => {
  let data = null;
  try {
    data = getDataByFileName<Skills>('skills', Resource.Resume);
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return data;
  }
};

export const getSummaryData = () => {
  let data = null;
  try {
    data = getDataByFileName<Summary>('summary', Resource.Resume);
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return data;
  }
};
