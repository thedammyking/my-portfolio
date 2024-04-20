import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { ExternalLinkIcon } from '@/assets';
import { BLUR_IMAGE } from '@/data/env';
import { Article } from '@/types/interfaces/article';

import Card from '../Card';
import Tag from '../Tag';

import '../../styles/base.scss';

interface ArticleCardProps {
  block?: boolean;
  data: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ block, data }) => {
  const year = new Date(data.date).getFullYear();
  return (
    <Card
      label='Project'
      className={cx({
        ['overflow-hidden']: block,
        ['p-0 sm:p-4 lg:p-0 xl:p-6 overflow-hidden sm:grid lg:block xl:grid sm:grid-cols-[max-content_1fr] sm:gap-4 md:gap-4 lg:gap-6 items-center']:
          !block
      })}
    >
      <a
        href={data.link}
        rel='noreferrer'
        target='_blank'
        className='absolute top-0 left-0 right-0 bottom-0 z-10'
        aria-label={data.title}
      />
      <span className='sr-only'>
        {data.title} ({year})
      </span>
      <div
        className={cx('relative overflow-hidden', {
          ['sm:border lg:border-none xl:border border-transparent dark:lg:group-hover:border-light-grey-200 lg:group-hover:border-dark-grey-200 xl:w-[120px] xl:h-20 sm:w-[168px] sm:h-24 w-full h-44 lg:h-44 lg:w-full mb-6 lg:mb-6 sm:mb-0 xl:mb-0 sm:rounded-[5px] xl:rounded-[5px] lg:rounded-none overflow-hidden']:
            !block,
          ['w-full h-44 mb-6']: block
        })}
      >
        <Image
          src={data.thumbnail}
          alt={data.title}
          placeholder='blur'
          quality={100}
          fill
          blurDataURL={BLUR_IMAGE}
          sizes={`(max-width: 768px) 186.67px, (max-width: 1200px) ${block ? '230px' : '120px'}, 326px`}
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className={cx('p-4 pt-0 lg:p-6 lg:pt-0', { ['sm:p-0 xl:p-0']: !block })}>
        <div className='flex justify-between items-center mb-2'>
          <p
            aria-label={String(year)}
            className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-tight'
          >
            {year}
          </p>
          <Tag>{data.platform}</Tag>
        </div>
        <h6 className='text-base font-medium leading-snug text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light'>
          {data.title}
          <ExternalLinkIcon className='ml-1 w-4 h-4 inline-block' />
        </h6>
      </div>
    </Card>
  );
};

export default ArticleCard;
