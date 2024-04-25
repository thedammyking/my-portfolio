import React from 'react';
import { uniqueId } from 'lodash';
import Image from 'next/image';

import { DownloadIcon, ExternalLinkIcon, StarIcon } from '@/assets';
import { BLUR_IMAGE } from '@/data/env';
import { Project } from '@/types/interfaces/project';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import TagList from '../TagList';

import '../../styles/base.scss';

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const icons = {
    download: DownloadIcon,
    star: StarIcon
  };

  return (
    <Card
      label='Project'
      className='p-0 sm:p-4 lg:p-0 xl:p-6 overflow-hidden sm:grid lg:block xl:grid sm:grid-cols-[max-content_1fr] sm:gap-4 md:gap-4 lg:gap-6 md:cursor-pointer'
      aria-label={data.title}
      onClick={() => data.link?.url && window.open(data.link.url, '_blank', 'noreferrer')}
      role='link'
    >
      <span className='sr-only'>{data.title}</span>
      <div className='border border-light-grey-100 xl:w-[120px] xl:h-20 sm:w-[168px] sm:h-24 w-full h-44 lg:h-44 lg:w-full relative mb-6 lg:mb-6 sm:mb-0 xl:mb-0 sm:rounded-[5px] xl:rounded-[5px] lg:rounded-none overflow-hidden'>
        <Image
          src={data.thumbnail}
          alt={data.title}
          placeholder='blur'
          blurDataURL={BLUR_IMAGE}
          quality={100}
          fill
          sizes='(max-width: 768px) 168px, (max-width: 1200px) 120px, 326px'
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='p-4 pt-0 sm:p-0 lg:p-6 lg:pt-0 xl:p-0'>
        <h3 className='text-base font-medium leading-tight text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light mb-3'>
          {data.title}
          <ExternalLinkIcon className='ml-1 w-4 h-4 inline-block align-top' />
        </h3>
        <p className='leading-normal font-normal text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white'>
          {data.summary}
        </p>
        {data.stats && (
          <ul className='list-none flex items-center gap-2.5 mt-3 relative z-20'>
            {data.stats.map(stat => {
              const Icon = icons[stat.type as keyof typeof icons];
              return (
                <li key={uniqueId('stat')}>
                  <LinkWithIcon icon={Icon ? <Icon /> : undefined} href={stat.url}>
                    {stat.count_text}
                  </LinkWithIcon>
                </li>
              );
            })}
          </ul>
        )}
        <TagList tags={data.technologies} className='mt-3' />
      </div>
    </Card>
  );
};

export default ProjectCard;
