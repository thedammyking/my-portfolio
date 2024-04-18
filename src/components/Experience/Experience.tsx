'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { DownloadIcon } from '@/assets';
import { useData } from '@/providers/DataProvider';
import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import ExperienceCard from '../ExperienceCard';

const Experience = () => {
  const { experience } = useData();
  return (
    experience?.length && (
      <div className='w-full h-max'>
        <div className='flex flex-col gap-10 md:gap-14'>
          {experience?.map(experience => (
            <ExperienceCard data={experience} key={uniqueId('experience-card')} />
          ))}
        </div>
        <Button variant={ButtonVariant.Text} icon={<DownloadIcon />} className='mt-8 xl:mt-10'>
          View Full Résumé
        </Button>
      </div>
    )
  );
};

export default Experience;
