import React from 'react';
import { uniqueId } from 'lodash';

import { ExternalLinkIcon } from '@/assets';
import { Experience } from '@/types/interfaces/experience';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import Tag from '../Tag';

interface ExperienceCardProps {
  data: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const getTo = () => {
    const now = new Date().getFullYear();
    const to = Number(data.to);
    if (now === to) return 'Present';
    return data.to;
  };
  return (
    <Card label='Experience' className='p-4 lg:p-6 xl:grid xl:grid-cols-[max-content_1fr] xl:gap-6'>
      <a
        href={data.url}
        rel='noreferrer'
        target='_blank'
        className='absolute top-0 left-0 right-0 bottom-0 z-10'
        aria-label={data.company}
      />
      <span className='sr-only'>
        {data.role} - {data.company} ({data.from} - {getTo()})
      </span>
      <p
        aria-label={`${data.from} - ${getTo()}`}
        className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-2 xl:mb-0'
      >
        {data.from} — {getTo()}
      </p>
      <div>
        <h6 className='text-base font-medium leading-none text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light flex items-center'>
          {data.role} · {data.company} <ExternalLinkIcon className='ml-1 w-4 h-4' />
        </h6>
        {data?.title && (
          <p className='leading-normal font-medium text-base body-text lg:group-hover:text-black lg:dark:group-hover:text-white mt-2'>
            {data.title}
          </p>
        )}
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
        <ul className='flex list-none items-center gap-2 mt-3'>
          {data.stack.map(stack => (
            <li key={uniqueId('stack')}>
              <Tag>{stack}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ExperienceCard;
