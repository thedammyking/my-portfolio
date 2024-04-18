import { ReactNode } from 'react';
import { capitalize } from 'lodash';

import About from '@/components/About';
import Articles from '@/components/Articles';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { ContentSection } from '@/types/enums';

export const CONTENT_SECTIONS: {
  [x in ContentSection]: {
    label: string;
    content: () => ReactNode;
  };
} = {
  [ContentSection.About]: {
    label: capitalize(ContentSection.About),
    content: About
  },
  [ContentSection.Experience]: {
    label: capitalize(ContentSection.Experience),
    content: Experience
  },
  [ContentSection.Projects]: {
    label: capitalize(ContentSection.Projects),
    content: Projects
  },
  [ContentSection.Articles]: {
    label: capitalize(ContentSection.Articles),
    content: Articles
  }
};
