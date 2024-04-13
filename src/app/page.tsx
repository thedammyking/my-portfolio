import React from 'react';
import { uniqueId } from 'lodash';

import ContentContainer from '@/components/ContentContainer';
import Header from '@/components/Header';
import { CONTENT_SECTIONS } from '@/data/contentSections';
import ActiveSectionStoreProvider from '@/providers/ActiveSectionStoreProvider';
import { ContentSection } from '@/types/globals';

export default function Home() {
  const contentSectionKeys = Object.keys(CONTENT_SECTIONS) as ContentSection[];
  return (
    <ActiveSectionStoreProvider>
      <div className='lg:flex lg:justify-between lg:gap-24'>
        <Header />
        <main id='content' className='lg:pt-24 lg:w-1/2 lg:py-24'>
          {contentSectionKeys.map(key => {
            const { label, content: Content } = CONTENT_SECTIONS[key];
            return (
              <ContentContainer key={uniqueId('content-container')} id={key} label={label}>
                <Content />
              </ContentContainer>
            );
          })}
        </main>
      </div>
    </ActiveSectionStoreProvider>
  );
}
