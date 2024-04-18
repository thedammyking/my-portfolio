'use client';

import React from 'react';
import { isEmpty, uniqueId } from 'lodash';
import Link from 'next/link';

import { CONTENT_SECTIONS } from '@/data/contentSections';
import { useActiveSectionStore } from '@/providers/ActiveSectionStoreProvider';
import { useData } from '@/providers/DataProvider';
import { ContentSection } from '@/types/enums';

import NavigationItem from './NavigationItem';

const Navigation = () => {
  const activeSection = useActiveSectionStore(state => state.activeSection);
  const data = useData();

  const contentSectionKeys = Object.keys(CONTENT_SECTIONS).filter(
    section => !isEmpty(data[section as keyof typeof data])
  ) as ContentSection[];

  return (
    <nav role='navigation'>
      <ul className='list-none hidden lg:flex flex-col gap-4'>
        {contentSectionKeys.map(key => {
          const { label } = CONTENT_SECTIONS[key];
          return (
            <li key={uniqueId('navigation')}>
              <Link href={`#${key}`} className='block w-max'>
                <NavigationItem active={key === activeSection} label={label} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
