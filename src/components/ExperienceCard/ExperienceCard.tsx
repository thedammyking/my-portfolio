import React from 'react';
import cx from 'classnames';
import { uniqueId } from 'lodash';

import { ExternalLinkIcon } from '@/assets';
import { formatDate } from '@/lib/dateUtils';
import markdownToHtml from '@/lib/markdownToHtml';
import { Experience } from '@/types/interfaces/experience';

import Card from '../Card';
import LinkWithIcon from '../LinkWithIcon';
import TagList from '../TagList';

import '../../styles/base.scss';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  data: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const roles = data.roles
    .sort((role1, role2) => new Date(role2.from).getTime() - new Date(role1.from).getTime())
    .map(role => ({
      ...role,
      body: markdownToHtml(role.body)
    }));

  console.log('roles :>> ', roles);

  return (
    <Card
      label='Experience'
      className='p-4 lg:p-6 md:cursor-pointer'
      aria-label={data.company}
      onClick={() => window.open(data.url, '_blank', 'noreferrer')}
      role='link'
    >
      <span className='sr-only'>
        {data.company} ({formatDate(data.from)} - {formatDate(data.to, 'Current')})
      </span>
      <div>
        <h5 className='text-base font-medium leading-tight text-black dark:text-light-grey-100 lg:group-hover:text-accent-dark lg:dark:group-hover:text-accent-light'>
          {data.company}
          <ExternalLinkIcon className='ml-1 w-4 h-4 inline-block align-top' />
        </h5>
        <p className='leading-tight font-medium text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white mt-1'>
          {data.location}
        </p>
        <div className='w-full flex flex-col gap-3 mt-4'>
          {roles.map(role => (
            <div key={uniqueId('roles')}>
              <h6 className='text-sm font-medium leading-tight text-black dark:text-light-grey-100 mb-1'>
                {role.role}
              </h6>
              <p
                aria-label={`${formatDate(role.from)} - ${formatDate(role.to, 'Current')}`}
                className='text-xs font-semibold body-text lg:group-hover:text-black lg:dark:group-hover:text-white uppercase leading-normal mb-1'
              >
                {formatDate(role.from)} — {formatDate(role.to, 'Current')}
              </p>
              <div
                className={cx(
                  'leading-normal font-normal text-sm body-text lg:group-hover:text-black lg:dark:group-hover:text-white',
                  styles.ExperienceCard_content_wrapper
                )}
                dangerouslySetInnerHTML={{ __html: role.body }}
              />
            </div>
          ))}
        </div>
        {data.articles?.length && (
          <ul className='flex flex-wrap items-center gap-2.5 list-none mt-4 relative z-20'>
            {data.articles.map(article => (
              <li key={uniqueId('related-article')}>
                <LinkWithIcon href={article.url}>{article.publication}</LinkWithIcon>
              </li>
            ))}
          </ul>
        )}
        <TagList tags={data.technologies} className='mt-3' />
      </div>
    </Card>
  );
};

export default ExperienceCard;
