'use client';

import React, { HTMLAttributes } from 'react';
import { InView } from 'react-intersection-observer';
import cx from 'classnames';

import { useActiveSectionStore } from '@/providers/ActiveSectionStoreProvider';
import { ContentSection } from '@/types/enums';

import { NavigationItem } from '../Navigation';

interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  label,
  className,
  ...props
}) => {
  const setActiveSection = useActiveSectionStore(state => state.setActiveSection);

  const handleIntersectionChange = (inView: boolean, entry: IntersectionObserverEntry) => {
    const activeSection = entry.target.getAttribute('id');
    inView && activeSection && setActiveSection(activeSection as ContentSection);
  };

  return (
    <InView
      as='section'
      {...props}
      threshold={label.toLowerCase() === ContentSection.Experience ? [0.1, 0.4, 0.8] : 0.2}
      className={cx('relative scroll-mt-16 lg:scroll-mt-24 lg:pt-0', className)}
      aria-label={label}
      onChange={handleIntersectionChange}
    >
      <div className='top-0 -mx-[16px] md:-mx-[32px] sticky z-30 w-screen py-[30px] px-4 md:px-8 lg:sr-only bg-[var(--background) backdrop-blur'>
        <NavigationItem inContent active label={label} className='lg:sr-only py-0' />
      </div>
      {children}
    </InView>
  );
};

export default ContentContainer;
