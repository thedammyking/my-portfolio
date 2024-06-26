'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { useData } from '@/providers/DataProvider';

import Accordion from '../Accordion';

import ProjectAccordionItem from './ProjectAccordionItem';

const ProjectArchiveMobile = () => {
  const { projects } = useData();
  return (
    <div className='block lg:hidden'>
      <div className='grid grid-cols-[max-content_1fr] gap-x-8 py-4 *:text-sm *:font-semibold *:leading-tight mb-[14px] border-0 border-b-[1px] border-dark-grey-100/10'>
        <p className='min-w-10'>Year</p>
        <p>Project</p>
      </div>
      <Accordion>
        {projects?.map((project, index) => (
          <ProjectAccordionItem
            data={project}
            isOpenedByDefault={index === 0}
            key={uniqueId('project-accordion')}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectArchiveMobile;
