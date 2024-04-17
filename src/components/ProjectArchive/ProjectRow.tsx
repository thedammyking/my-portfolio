'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { ExternalLinkIcon } from '@/assets';

import Tags from '../Tag';

const ProjectRow = () => {
  return (
    <tr
      className='border-light-grey-700/10 dark:border-dark-grey-100/10'
      key={uniqueId('project-row')}
    >
      <td>
        <p className='text-sm font-normal leading-tight text-dark-grey-400'>2023</p>
      </td>
      <td>
        <p className='text-base font-semibold leading-snug text-black dark:text-dark-grey-100'>
          Emerson Collective
        </p>
      </td>
      <td>
        <p className='text-sm font-normal leading-tight text-dark-grey-400'>Upstatement</p>
      </td>
      <td>
        <div className='flex items-center gap-[6px] flex-wrap'>
          <Tags>CSS</Tags>
          <Tags>Next.js</Tags>
          <Tags>jQuery</Tags>
          <Tags>Javascript</Tags>
        </div>
      </td>
      <td>
        <a
          className='text-sm font-medium leading-tight flex items-center gap-[2px] text-dark-grey-400 lg:hover:text-accent-dark lg:dark:hover:text-accent-light'
          href='/'
        >
          emersoncollective.com <ExternalLinkIcon className='w-4 h-4 relative' />
        </a>
      </td>
    </tr>
  );
};

export default ProjectRow;
