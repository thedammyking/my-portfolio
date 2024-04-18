import React from 'react';
import { uniqueId } from 'lodash';

import ContentContainer from '@/components/ContentContainer';
import Header from '@/components/Header';
import { CONTENT_SECTIONS } from '@/data/contentSections';
import { getAboutData, getHeaderData } from '@/lib/api/home';
import ActiveSectionStoreProvider from '@/providers/ActiveSectionStoreProvider';
import DataProvider from '@/providers/DataProvider';
import { ContentSection } from '@/types/enums';

export default async function Home() {
  const contentSectionKeys = Object.keys(CONTENT_SECTIONS) as ContentSection[];
  const headerData = await getHeaderData();
  const aboutData = await getAboutData();

  return (
    <ActiveSectionStoreProvider>
      <DataProvider header={headerData} about={aboutData}>
        <div className='lg:flex lg:justify-between lg:gap-24'>
          <Header />
          <main
            id='content'
            className='lg:w-1/2 pb-12 lg:py-24 flex flex-col gap-10 md:gap-16 lg:gap-24'
          >
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
      </DataProvider>
    </ActiveSectionStoreProvider>
  );
}
