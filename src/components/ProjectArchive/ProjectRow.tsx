'use client';

import React from 'react';

import { ExternalLinkIcon } from '@/assets';
import { Project } from '@/types/interfaces/project';

import TagList from '../TagList';

interface ProjectRowProps {
  data: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ data }) => {
  const year = new Date(data.year).getFullYear();
  return (
    <tr className='border-light-grey-700/10 dark:border-dark-grey-100/10'>
      <td>
        <p className='text-sm font-normal leading-tight text-dark-grey-400'>{year}</p>
      </td>
      <td>
        <p className='text-base font-semibold leading-snug min-w-[150px] text-black dark:text-dark-grey-100'>
          {data.title}
        </p>
      </td>
      <td>
        {data?.made_at && (
          <p className='text-sm font-normal min-w-[100px] leading-tight text-dark-grey-400'>
            {data?.made_at}
          </p>
        )}
      </td>
      <td>
        <TagList tags={data.technologies} />
      </td>
      <td>
        {data.link && !data.link.label.startsWith('-') && (
          <a
            className='text-sm font-medium min-w-[200px] leading-tight flex items-center gap-[2px] text-dark-grey-400 lg:hover:text-accent-dark lg:dark:hover:text-accent-light'
            href={data.link.url}
            rel='noreferrer'
            target='_blank'
            aria-label={data.title}
          >
            {data.link.label}
            <ExternalLinkIcon className='ml-1 w-4 h-4 relative inline-block align-top' />
          </a>
        )}
      </td>
    </tr>
  );
};

export default ProjectRow;
