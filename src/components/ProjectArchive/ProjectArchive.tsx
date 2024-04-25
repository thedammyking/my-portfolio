'use client';

import React from 'react';
import { WebPage } from 'schema-dts';

import JsonLd from '../JsonLd';

import ProjectArchiveDeskTop from './ProjectArchiveDeskTop';
import ProjectArchiveMobile from './ProjectArchiveMobile';

const jsonLd: WebPage = {
  '@type': 'WebPage',
  '@id': 'https://oluwadamilola.me/list/projects',
  url: 'https://oluwadamilola.me/list/projects',
  name: 'Projects Archive',
  description: `All projects built by Oluwadamilola`,
  inLanguage: 'en-US',
  isPartOf: {
    '@id': 'https://oluwadamilola.me'
  },
  about: { '@id': 'https://oluwadamilola.me/list/projects' },
  mainEntity: { '@id': 'https://oluwadamilola.me/list/projects' }
};

const ProjectArchive = () => {
  return (
    <>
      <JsonLd json={jsonLd} />
      <div className='w-full h-max mb-10'>
        <ProjectArchiveDeskTop />
        <ProjectArchiveMobile />
      </div>
    </>
  );
};

export default ProjectArchive;
