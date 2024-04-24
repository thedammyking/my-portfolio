import * as Sentry from '@sentry/nextjs';

import { Resource } from '@/types/enums';
import { About, Header } from '@/types/interfaces/home';

import { getDataByFileName } from '../apiUtils';

export const getHeaderData = () => {
  let header = null;
  try {
    header = getDataByFileName<Header>('header', Resource.Home);
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return header;
  }
};

export const getAboutData = () => {
  let about = null;
  try {
    about = getDataByFileName<About>('about', Resource.Home);
  } catch (error) {
    Sentry.captureException(error);
  } finally {
    return about;
  }
};
