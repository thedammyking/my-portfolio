import React from 'react';
import { capitalize } from 'lodash';

import AllArticles from '@/components/AllArticles';
import If from '@/components/If';
import ProjectArchive from '@/components/ProjectArchive';
import { Resource } from '@/types/enums';

export default function ResourcePage({ params }: { params: { resource: Resource } }) {
  return (
    <div className='flex flex-col gap-[52px]'>
      <header aria-label={`All ${params.resource}`}>
        <h1 className='xl:text-5xl md:text-[40px] text-[32px] font-bold text-black dark:text-white'>
          All {capitalize(params.resource)}
        </h1>
      </header>
      <main>
        <If condition={params.resource === Resource.Articles}>
          <AllArticles />
        </If>
        <If condition={params.resource === Resource.Projects}>
          <ProjectArchive />
        </If>
      </main>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return [Resource.Articles, Resource.Projects].map(resource => ({
    resource
  }));
}
