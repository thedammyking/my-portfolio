import React from 'react';
import { uniqueId } from 'lodash';

import Accordion from '../Accordion';

import ProjectAccordionItem from './ProjectAccordionItem';

const ProjectArchiveMobile = () => {
  return (
    <div className='block lg:hidden'>
      <div className='grid grid-cols-[max-content_1fr] gap-x-8 py-4 *:text-sm *:font-semibold *:leading-tight mb-[14px] border-0 border-b-[1px] border-dark-grey-100/10'>
        <p className='min-w-10'>Year</p>
        <p>Project</p>
      </div>
      <Accordion>
        {Array(7)
          .fill(1)
          .map((_, index) => (
            <ProjectAccordionItem
              isOpenedByDefault={index === 0}
              key={uniqueId('project-accordion')}
            />
          ))}
      </Accordion>
    </div>
  );
};

export default ProjectArchiveMobile;
