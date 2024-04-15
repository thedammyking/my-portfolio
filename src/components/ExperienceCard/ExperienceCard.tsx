import React from 'react';

import { ExternalLinkIcon } from '@/assets';

import LinkWithIcon from '../LinkWithIcon';
import Tags from '../Tags';

const ExperienceCard = () => {
  return (
    <div
      aria-label='Experience'
      className='group relative w-full p-5 mb:p-6 rounded-lg border border-light-grey-300 dark:border-dark-grey-500 xl:grid xl:grid-cols-[max-content_1fr] gap-6 lg:dark:hover:bg-gradient-to-br lg:dark:hover:from-neutral-700 lg:dark:hover:to-neutral-800 lg:hover:bg-gradient-to-br lg:hover:from-neutral-100 lg:hover:to-neutral-200 lg:transition-all lg:ease-in-out lg:duration-300'
    >
      <a
        href='/'
        rel='noreferrer'
        target='_blank'
        className='absolute top-0 left-0 right-0 bottom-0 z-10'
        aria-label='Upstatement'
      />
      <span className='sr-only'>Lead Engineer · Upstatement (2018 - Present)</span>
      <p
        aria-label='2018 — Present'
        className='text-xs font-semibold text-light-grey-500 dark:text-dark-grey-300 lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-2 xl:mb-0'
      >
        2018 — Present
      </p>
      <div>
        <h6 className='text-base font-medium leading-none text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light mb-1 flex items-center'>
          Lead Engineer · Upstatement <ExternalLinkIcon className='ml-1 w-4 h-4' />
        </h6>
        <p className='leading-normal font-medium text-base text-light-grey-500 dark:text-dark-grey-200 lg:group-hover:text-black lg:dark:group-hover:text-white mb-3'>
          Senior Engineer
        </p>
        <p className='leading-tight font-normal text-sm text-light-grey-500 dark:text-dark-grey-200 lg:group-hover:text-black lg:dark:group-hover:text-white'>
          Build, style, and ship high-quality websites, design systems, mobile apps, and digital
          experiences for a diverse array of projects for clients including Harvard Business School,
          Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th
          News, and more. Provide leadership within engineering department through close
          collaboration, knowledge shares, and spearheading the development of internal tools.
        </p>
        <div className='flex items-center gap-2.5 mt-4 relative z-20'>
          <LinkWithIcon href='/'>MusicKit.js</LinkWithIcon>
          <LinkWithIcon href='/'>The Verge</LinkWithIcon>
          <LinkWithIcon href='/'>9to5Mac</LinkWithIcon>
        </div>
        <div className='flex items-center gap-2 mt-3'>
          <Tags>Javascript</Tags>
          <Tags>CSS</Tags>
          <Tags>jQuery</Tags>
          <Tags>HTML</Tags>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
