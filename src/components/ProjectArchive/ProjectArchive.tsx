'use client';

import React from 'react';

import ProjectArchiveDeskTop from './ProjectArchiveDeskTop';
import ProjectArchiveMobile from './ProjectArchiveMobile';

const ProjectArchive = () => {
  return (
    <div className='w-full h-max mb-10'>
      <ProjectArchiveDeskTop />
      <ProjectArchiveMobile />
    </div>
  );
};

export default ProjectArchive;
