'use client';

import React from 'react';
import { uniqueId } from 'lodash';

import { DownloadIcon } from '@/assets';
import { useData } from '@/providers/DataProvider';
import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import ExperienceCard from '../ExperienceCard';
import { Download } from '../Resume';

const Experience = () => {
  const data = useData();
  const { experience } = data;

  return (
    <div className='w-full h-max'>
      <ul className='flex flex-col gap-10 list-none md:gap-14'>
        {experience?.map(experience => (
          <li key={uniqueId('experience-card')}>
            <ExperienceCard data={experience} />
          </li>
        ))}
      </ul>
      <Button
        onClick={e => {
          (e.currentTarget.nextSibling as HTMLAnchorElement).click();
        }}
        variant={ButtonVariant.Text}
        icon={<DownloadIcon />}
        className='mt-8 xl:mt-10'
      >
        View Full Résumé
      </Button>
      <Download data={data} />
    </div>
  );
};

export default Experience;
