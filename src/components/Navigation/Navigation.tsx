'use client';

import React from 'react';
import { uniqueId } from 'lodash';
import Link from 'next/link';

import { CONTENT_SECTIONS } from '@/data/contentSections';
import { useActiveSectionStore } from '@/providers/ActiveSectionStoreProvider';
import { ContentSection } from '@/types/globals';

import NavigationItem from './NavigationItem';

const Navigation = () => {
  const activeSection = useActiveSectionStore(state => state.activeSection);
  const contentSectionKeys = Object.keys(CONTENT_SECTIONS) as ContentSection[];
  return (
    <nav role='navigation'>
      <ul className='list-none hidden lg:flex flex-col gap-4'>
        {contentSectionKeys.map(link => {
          return (
            <li key={uniqueId('navigation')}>
              <Link href={`#${link}`} className='block w-max'>
                <NavigationItem id={`nav-${link}`} active={link === activeSection} label={link} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
