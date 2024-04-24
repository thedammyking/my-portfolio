import React from 'react';

import { ExternalLinkIcon } from '@/assets';
import { Project } from '@/types/interfaces/project';

import { AccordionContent, AccordionHeader, AccordionItem } from '../Accordion';
import TagList from '../TagList';

import '../../styles/base.scss';

interface ProjectAccordionItemProps {
  isOpenedByDefault?: boolean;
  data: Project;
}

const ProjectAccordionItem: React.FC<ProjectAccordionItemProps> = ({ data, ...props }) => {
  const year = new Date(data.year).getFullYear();
  return (
    <AccordionItem {...props}>
      <AccordionHeader className='grid grid-cols-[max-content_1fr] sm:grid-cols-[max-content_1fr_1fr] gap-x-8 py-[18px] pr-5'>
        <p className='min-w-10 body-text'>{year}</p>
        <p className='text-black dark:text-light-grey-100 hidden sm:inline-grid'>{data.title}</p>
        <a
          href={data.link?.url}
          onClick={e => {
            if (data.link?.label?.startsWith('-')) {
              e.preventDefault();
            }
          }}
          rel='noreferrer'
          target='_blank'
          aria-label={data.title}
          className='text-black leading-tight dark:text-light-grey-100 sm:text-light-grey-600 sm:dark:text-dark-grey-200 col-start-2 sm:col-start-3'
        >
          <span className='sm:hidden'>{data.title}</span>
          <span className='hidden sm:inline'>{data.link?.label}</span>
          {!data.link?.label.startsWith('-') && (
            <ExternalLinkIcon className='w-4 h-4 ml-[2px] inline-block align-top' />
          )}
        </a>
      </AccordionHeader>
      <AccordionContent className='grid grid-rows-[max-content_max-content] grid-cols-[40px_1fr] sm:grid-rows-1 sm:grid-cols-[40px_1fr_1fr] gap-x-8 gap-y-4 sm:gap-y-0 py-[18px] pt-0 pr-5'>
        <div className='col-start-2 *:text-sm *:font-normal *:leading-tight'>
          <p className='text-black dark:text-light-grey-100  mb-[10px]'>Made at</p>
          {data.made_at && <p className='body-text'>{data.made_at}</p>}
        </div>
        <div className='col-start-2 sm:col-start-3 sm:row-start-1 *:text-sm *:font-normal *:leading-tight'>
          <p className='text-black dark:text-light-grey-100 mb-[10px]'>Stack</p>
          <TagList tags={data.technologies} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ProjectAccordionItem;
