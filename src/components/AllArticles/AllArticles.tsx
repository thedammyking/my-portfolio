'use client';

import React from 'react';
import { uniqueId } from 'lodash';
import { WebPage } from 'schema-dts';

import { useData } from '@/providers/DataProvider';

import ArticleCard from '../ArticleCard';
import JsonLd from '../JsonLd';

const jsonLd: WebPage = {
  '@type': 'WebPage',
  '@id': 'https://oluwadamilola.me/list/articles',
  url: 'https://oluwadamilola.me/list/articles',
  name: 'All Articles',
  description: `All articles written by Oluwadamilola`,
  inLanguage: 'en-US',
  isPartOf: {
    '@id': 'https://oluwadamilola.me'
  },
  about: { '@id': 'https://oluwadamilola.me/list/articles' },
  mainEntity: { '@id': 'https://oluwadamilola.me/list/articles' }
};

const AllArticles = () => {
  const { articles } = useData();
  return (
    <>
      <JsonLd json={jsonLd} />
      <ul className='list-none w-full h-max flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
        {articles?.map(article => (
          <li key={uniqueId('article-card')}>
            <ArticleCard data={article} block />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllArticles;
