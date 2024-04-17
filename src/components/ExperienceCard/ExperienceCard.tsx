import React from 'react';

import { ExternalLinkIcon } from '@/assets';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import Tags from '../Tag';

const ExperienceCard = () => {
  return (
    <Card label='Experience' className='p-4 lg:p-6 xl:grid xl:grid-cols-[max-content_1fr] xl:gap-6'>
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
        className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-2 xl:mb-0'
      >
        2018 — Present
      </p>
      <div>
        <h6 className='text-base font-medium leading-none text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light mb-1 flex items-center'>
          Lead Engineer · Upstatement <ExternalLinkIcon className='ml-1 w-4 h-4' />
        </h6>
        <p className='leading-normal font-medium text-base body-text lg:group-hover:text-black lg:dark:group-hover:text-white mb-3'>
          Senior Engineer
        </p>
        <p className='leading-normal font-normal text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white'>
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
    </Card>
  );
};

export default ExperienceCard;
