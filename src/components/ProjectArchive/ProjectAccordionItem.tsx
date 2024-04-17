import React from 'react';

import { ExternalLinkIcon } from '@/assets';

import { AccordionContent, AccordionHeader, AccordionItem } from '../Accordion';
import Tags from '../Tag';

interface ProjectAccordionItemProps {
  isOpenedByDefault?: boolean;
}

const ProjectAccordionItem: React.FC<ProjectAccordionItemProps> = props => {
  return (
    <AccordionItem {...props}>
      <AccordionHeader className='grid grid-cols-[max-content_1fr_1fr] gap-x-8 py-[18px]'>
        <p className='min-w-10 body-text'>2023</p>
        <p className='text-black dark:text-light-grey-100 hidden sm:inline-grid'>
          Emerson Collective
        </p>
        <a
          href='/'
          className='text-black dark:text-light-grey-100 sm:text-light-grey-600 sm:dark:text-dark-grey-200 flex items-center gap-[2px] w-max col-start-2 sm:col-start-3'
        >
          <span className='sm:hidden'>Emerson Collective</span>{' '}
          <span className='hidden sm:inline-flex'>emersoncollective.com</span>{' '}
          <ExternalLinkIcon className='w-4 h-4' />
        </a>
      </AccordionHeader>
      <AccordionContent className='grid grid-rows-[max-content_max-content] grid-cols-[40px_1fr] sm:grid-rows-1 sm:grid-cols-[40px_1fr_1fr] gap-x-8 gap-y-4 sm:gap-y-0 py-[18px] pt-0'>
        <div className='col-start-2 *:text-sm *:font-normal *:leading-tight'>
          <p className='text-black dark:text-light-grey-100  mb-[10px]'>Made at</p>
          <p className='body-text'>Upstatement</p>
        </div>
        <div className='col-start-2 sm:col-start-3 sm:row-start-1 *:text-sm *:font-normal *:leading-tight'>
          <p className='text-black dark:text-light-grey-100 mb-[10px]'>Stack</p>
          <div className='flex flex-wrap gap-3'>
            <Tags>CSS</Tags>
            <Tags>Next.js</Tags>
            <Tags>jQuery</Tags>
            <Tags>Javascript</Tags>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ProjectAccordionItem;
