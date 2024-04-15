'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import ArticleCard from '../ArticleCard';

const AllArticles = () => {
  return (
    <div className='w-full h-max flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
      {Array(4)
        .fill(1)
        .map(() => (
          <ArticleCard block key={uniqueId('article-card')} />
        ))}
    </div>
  );
};

export default AllArticles;
