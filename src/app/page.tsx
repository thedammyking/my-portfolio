import React from 'react';
import { isEmpty, uniqueId } from 'lodash';
import { Graph } from 'schema-dts';

import ContentContainer from '@/components/ContentContainer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { CONTENT_SECTIONS } from '@/data/contentSections';
import { getAllArticles } from '@/lib/api/articles';
import { getAllExperience } from '@/lib/api/experience';
import { getAboutData, getHeaderData } from '@/lib/api/home';
import { getAllProjects } from '@/lib/api/projects';
import ActiveSectionStoreProvider from '@/providers/ActiveSectionStoreProvider';
import DataProvider from '@/providers/DataProvider';
import { ContentSection } from '@/types/enums';

const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://oluwadamilola.me/#about',
      url: 'https://oluwadamilola.me/#about',
      name: 'Oluwadamilola, A Frontend Engineer',
      inLanguage: 'en-US',
      description:
        'Crafting scalable, user-friendly, and reliable web products with outstanding performance.',
      mainEntity: { '@id': 'https://oluwadamilola.me/#about' }
    },
    {
      '@type': 'ResumeAction',
      '@id': 'https://oluwadamilola.me/#experience',
      name: 'Download Résumé',
      url: 'https://oluwadamilola.me/#experience',
      description: `Oluwadamilola's Résumé`
    },
    {
      '@type': 'WebPage',
      '@id': 'https://oluwadamilola.me/#experience',
      url: 'https://oluwadamilola.me/#experience',
      name: 'Experience',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://oluwadamilola.me'
      },
      about: { '@id': 'https://oluwadamilola.me/#about' },
      mainEntity: { '@id': 'https://oluwadamilola.me/#experience' }
    }
  ]
};

export default async function Home() {
  const pageData = {
    header: await getHeaderData(),
    about: await getAboutData(),
    experience: await getAllExperience(),
    projects: await getAllProjects(),
    articles: await getAllArticles()
  };

  const contentSectionKeys = Object.keys(CONTENT_SECTIONS).filter(
    section => !isEmpty(pageData[section as keyof typeof pageData])
  ) as ContentSection[];

  return (
    <>
      <JsonLd json={jsonLd} />
      <ActiveSectionStoreProvider>
        <DataProvider {...pageData}>
          <div className='lg:flex lg:justify-between lg:gap-24 pt-[84px] md:pt-[96px] lg:pt-0'>
            <Header />
            <main
              id='content'
              aria-label='content'
              className='lg:w-[55%] pb-12 lg:py-24 flex flex-col gap-10 md:gap-16 lg:gap-24'
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
      <Footer />
    </>
  );
}
