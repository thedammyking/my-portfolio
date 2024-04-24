'use client';

import React from 'react';
import { uniqueId } from 'lodash';
import { useRouter } from 'next/navigation';

import { AngleRightIcon } from '@/assets';
import { useData } from '@/providers/DataProvider';
import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const router = useRouter();
  const { projects } = useData();
  const sorted = projects?.sort((a, b) => Number(a.priority) - Number(b.priority));
  return (
    <div className='w-full h-max'>
      <ul className='list-none flex flex-col gap-10 md:gap-14'>
        {sorted?.slice(0, 4).map(project => (
          <li key={uniqueId('project-card')}>
            <ProjectCard data={project} />
          </li>
        ))}
      </ul>
      {projects && projects.length > 4 && (
        <Button
          onClick={() =>
            router.push('/list/projects', {
              scroll: false
            })
          }
          variant={ButtonVariant.Text}
          icon={<AngleRightIcon />}
          className='mt-8 xl:mt-10'
        >
          View Projects Archive
        </Button>
      )}
    </div>
  );
};

export default Projects;
