import React from 'react';
import Image from 'next/image';

import { ExternalLinkIcon } from '@/assets';
import articleImage from '@/assets/images/article.png';

import Card from '../Card';
import Tags from '../Tags';

const ArticleCard = () => {
  return (
    <Card
      label='Project'
      className='p-0 sm:p-4 lg:p-0 xl:p-6 overflow-hidden sm:grid lg:block xl:grid sm:grid-cols-[max-content_1fr] sm:gap-4 md:gap-4 lg:gap-6 items-center'
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
          src={articleImage}
          alt='Spotify Profile'
          placeholder='blur'
          fill
          className='object-cover'
        />
      </div>
      <div className='p-4 pt-0 sm:p-0 lg:p-6 lg:pt-0 xl:p-0'>
        <div className='flex justify-between items-center mb-2'>
          <p
            aria-label='2024'
            className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-tight'
          >
            2024
          </p>
          <Tags>Medium</Tags>
        </div>
        <h6 className='text-base font-medium leading-none text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light'>
          Best Practices for Scalability and Performance
          <ExternalLinkIcon className='ml-1 w-4 h-4 inline-block' />
        </h6>
      </div>
    </Card>
  );
};

export default ArticleCard;