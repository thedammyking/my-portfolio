'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { useData } from '@/providers/DataProvider';

import ArticleCard from '../ArticleCard';

const AllArticles = () => {
  const { articles } = useData();
  return (
    <ul className='list-none w-full h-max flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
      {articles?.map(article => (
        <li key={uniqueId('article-card')}>
          <ArticleCard data={article} block />
        </li>
      ))}
    </ul>
  );
};

export default AllArticles;
