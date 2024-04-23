import React from 'react';
import { format, isValid } from 'date-fns';
import { uniqueId } from 'lodash';

import { ExternalLinkIcon } from '@/assets';
import { Experience } from '@/types/interfaces/experience';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import TagList from '../TagList';

import '../../styles/base.scss';

interface ExperienceCardProps {
  data: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const getTo = () => {
    if (!isValid(new Date(data.to))) return 'Present';
    return format(new Date(data.to), 'MMM yyyy');
  };

  const getFrom = () => {
    return format(new Date(data.from), 'MMM yyyy');
  };

  return (
    <Card
      label='Experience'
      className='p-4 lg:p-6 xl:grid xl:grid-cols-[max-content_1fr] xl:gap-6 md:cursor-pointer'
      aria-label={data.company}
      onClick={() => window.open(data.url, '_blank', 'noreferrer')}
      role='link'
    >
      <span className='sr-only'>
        {data.role} - {data.company} ({getFrom()} - {getTo()})
      </span>
      <p
        aria-label={`${getFrom()} - ${getTo()}`}
        className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-2 xl:mb-0'
      >
        {getFrom()} — {getTo()}
      </p>
      <div>
        <h6 className='text-base font-medium leading-tight text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light'>
          {data.role} at {data.company}
          <ExternalLinkIcon className='ml-1 w-4 h-4 inline-block align-top' />
        </h6>
        <p className='leading-normal font-medium text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white mt-2'>
          {data.location}
        </p>
        <p
          className='leading-normal font-normal text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white mt-3'
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {data.articles && (
          <ul className='flex items-center gap-2.5 list-none mt-3 relative z-20'>
            {data.articles.map(article => (
              <li key={uniqueId('related-article')}>
                <LinkWithIcon href={article.url}>{article.publication}</LinkWithIcon>
              </li>
            ))}
          </ul>
        )}
        <TagList tags={data.stack} className='mt-3' />
      </div>
    </Card>
  );
};

export default ExperienceCard;
