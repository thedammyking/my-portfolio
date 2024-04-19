import React from 'react';
import { capitalize } from 'lodash';

import AllArticles from '@/components/AllArticles';
import If from '@/components/If';
import ProjectArchive from '@/components/ProjectArchive';
import { getAllArticles } from '@/lib/api/articles';
import { getAllProjects } from '@/lib/api/projects';
import DataProvider from '@/providers/DataProvider';
import { Resource } from '@/types/enums';

interface ResourcePageProps {
  params: { resource: Resource };
}

const ResourcePage: React.FC<ResourcePageProps> = async ({ params }) => {
  const pageData = {
    articles: await getAllArticles(),
    projects: await getAllProjects()
  };

  return (
    <DataProvider {...pageData}>
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
    </DataProvider>
  );
};

export default ResourcePage;

export const dynamicParams = false;

export async function generateStaticParams() {
  let params: { resource: Resource }[] = [];
  const articles = await getAllArticles();
  const projects = await getAllProjects();
  if (articles.length > 4) params.push({ resource: Resource.Articles });
  if (projects.length > 4) params.push({ resource: Resource.Projects });
  return params;
}

export async function generateMetadata({ params }: ResourcePageProps) {
  return {
    title: `All ${capitalize(params.resource)}`
  };
}
