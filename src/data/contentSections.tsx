import { ReactNode } from 'react';

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
    label: 'About',
    content: About
  },
  [ContentSection.Experience]: {
    label: 'Experience',
    content: Experience
  },
  [ContentSection.Projects]: {
    label: 'Projects',
    content: Projects
  },
  [ContentSection.Articles]: {
    label: 'Articles',
    content: Articles
  }
};
