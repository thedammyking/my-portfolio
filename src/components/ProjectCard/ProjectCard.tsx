import React from 'react';
import Image from 'next/image';

import { DownloadIcon, ExternalLinkIcon } from '@/assets';
import { Project } from '@/types/interfaces/project';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import Tags from '../Tag';

const ProjectCard = () => {
  return (
    <Card
      label='Project'
      className='p-0 sm:p-4 lg:p-0 xl:p-6 overflow-hidden sm:grid lg:block xl:grid sm:grid-cols-[max-content_1fr] sm:gap-4 md:gap-4 lg:gap-6'
    >
      <a
        href='/'
        rel='noreferrer'
        target='_blank'
        className='absolute top-0 left-0 right-0 bottom-0 z-10'
        aria-label='Spotify Profile'
      />
      <span className='sr-only'>Spotify Profile (2018)</span>
      <div className='sm:border lg:border-none xl:border border-transparent dark:lg:group-hover:border-light-grey-200 lg:group-hover:border-dark-grey-200 xl:w-[120px] xl:h-20 sm:w-[168px] sm:h-24 w-full h-44 lg:h-44 lg:w-full relative mb-6 lg:mb-6 sm:mb-0 xl:mb-0 sm:rounded-[5px] xl:rounded-[5px] lg:rounded-none overflow-hidden'>
        <Image
          src={projectImage}
          alt='Spotify Profile'
          placeholder='blur'
          fill
          sizes='(max-width: 768px) 168px, (max-width: 1200px) 120px, 326px'
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='p-4 pt-0 sm:p-0 lg:p-6 lg:pt-0 xl:p-0'>
        <p
          aria-label='2018'
          className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-1'
        >
          2018
        </p>
        <h6 className='text-base font-medium leading-none text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light mb-3 flex items-center'>
          Spotify Profile <ExternalLinkIcon className='ml-1 w-4 h-4' />
        </h6>
        <p className='leading-normal font-normal text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white'>
          Web app for visualizing personalized Spotify data. View your top artists, top tracks,
          recently played tracks, and detailed audio information about each track. Create and save
          new playlists of recommended tracks based on your existing playlists and more.
        </p>
        <div className='flex items-center gap-2.5 mt-3 relative z-20'>
          <LinkWithIcon href='/' icon={<DownloadIcon />}>
            100k+ Installs
          </LinkWithIcon>
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

export default ProjectCard;
