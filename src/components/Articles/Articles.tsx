import React from 'react';
import { uniqueId } from 'lodash';

import { AngleRightIcon } from '@/assets';
import { ButtonVariant } from '@/types/enums';

import ArticleCard from '../ArticleCard';
import Button from '../Button';

const Articles = () => {
  return (
    <div className='w-full h-max'>
      <div className='flex flex-col gap-10 md:gap-14'>
        {Array(4)
          .fill(1)
          .map(() => (
            <ArticleCard key={uniqueId('article-card')} />
          ))}
      </div>
      <Button variant={ButtonVariant.Text} icon={<AngleRightIcon />} className='mt-8 xl:mt-10'>
        View All Articles
      </Button>
    </div>
  );
};

export default Articles;
