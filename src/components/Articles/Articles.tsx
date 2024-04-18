'use client';

import React from 'react';
import { uniqueId } from 'lodash';
import { useRouter } from 'next/navigation';

import { AngleRightIcon } from '@/assets';
import { useData } from '@/providers/DataProvider';
import { ButtonVariant } from '@/types/enums';

import ArticleCard from '../ArticleCard';
import Button from '../Button';

const Articles = () => {
  const router = useRouter();
  const { articles } = useData();
  return (
    <div className='w-full h-max'>
      <div className='flex flex-col gap-10 md:gap-14'>
        {articles
          ?.slice(0, 4)
          .map(article => <ArticleCard data={article} key={uniqueId('article-card')} />)}
      </div>
      {articles && articles.length > 4 && (
        <Button
          onClick={() =>
            router.push('/list/articles', {
              scroll: false
            })
          }
          variant={ButtonVariant.Text}
          icon={<AngleRightIcon />}
          className='mt-8 xl:mt-10'
        >
          View All Articles
        </Button>
      )}
    </div>
  );
};

export default Articles;
