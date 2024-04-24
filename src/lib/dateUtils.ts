import { format, isValid } from 'date-fns';

import { DATE_FORMAT } from '@/data/contants';

export const formatDate = (date: string, placeHolder: string = '-') => {
  if (!isValid(new Date(date))) return placeHolder;
  return format(new Date(date), DATE_FORMAT);
};
