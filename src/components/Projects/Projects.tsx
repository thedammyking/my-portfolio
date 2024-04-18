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
  return (
    <div className='w-full h-max'>
      <div className='flex flex-col gap-10 md:gap-14'>
        {projects?.map(project => <ProjectCard data={project} key={uniqueId('project-card')} />)}
      </div>
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
    </div>
  );
};

export default Projects;
