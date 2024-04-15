import React from 'react';
import { uniqueId } from 'lodash';

import { AngleRightIcon } from '@/assets';
import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <div className='w-full h-max'>
      <div className='flex flex-col gap-10 md:gap-14'>
        {Array(4)
          .fill(1)
          .map(() => (
            <ProjectCard key={uniqueId('project-card')} />
          ))}
      </div>
      <Button variant={ButtonVariant.Text} icon={<AngleRightIcon />} className='mt-8 xl:mt-10'>
        View Projects Archive
      </Button>
    </div>
  );
};

export default Projects;
