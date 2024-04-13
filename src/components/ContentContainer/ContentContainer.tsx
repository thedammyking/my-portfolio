'use client';

import React, { HTMLAttributes } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';

import { useActiveSectionStore } from '@/providers/ActiveSectionStoreProvider';
import { ContentSection } from '@/types/globals';

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
  const { ref } = useInView({
    onChange: (inView, entry) =>
      inView && setActiveSection(entry.target.getAttribute('id') as ContentSection),
    threshold: 0.5
  });

  return (
    <section
      {...props}
      className={cx(
        'relative mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24 lg:pt-0',
        className
      )}
      ref={ref}
    >
      <div className='top-0 -mx-[16px] md:-mx-[32px] sticky z-20 w-screen py-[30px] px-4 md:px-8 lg:sr-only bg-[var(--background) backdrop-blur'>
        <NavigationItem inContent active label={label} className='lg:sr-only py-0' />
      </div>
      {children}
    </section>
  );
};

export default ContentContainer;
