'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { useData } from '@/providers/DataProvider';

import ArticleCard from '../ArticleCard';

const AllArticles = () => {
  const { articles } = useData();
  return (
    <div className='w-full h-max flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
      {articles?.map(article => (
        <ArticleCard data={article} block key={uniqueId('article-card')} />
      ))}
    </div>
  );
};

export default AllArticles;
