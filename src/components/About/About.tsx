'use client';

import React from 'react';

import { useData } from '@/providers/DataProvider';

import '../../styles/base.scss';

const About = () => {
  const { about } = useData();
  return (
    <div className='w-full lg:h-[543px]'>
      <p
        className='w-full text-base font-normal leading-normal body-text'
        dangerouslySetInnerHTML={{ __html: about?.content || '' }}
      />
    </div>
  );
};

export default About;
