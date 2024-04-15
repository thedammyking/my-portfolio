import React from 'react';
import { uniqueId } from 'lodash';

import { DownloadIcon } from '@/assets';
import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import ExperienceCard from '../ExperienceCard';

const Experience = () => {
  return (
    <div className='w-full h-max'>
      <div className='flex flex-col gap-10 md:gap-14'>
        {Array(6)
          .fill(1)
          .map(() => (
            <ExperienceCard key={uniqueId('experience-card')} />
          ))}
      </div>
      <Button variant={ButtonVariant.Text} icon={<DownloadIcon />} className='mt-8 xl:mt-10'>
        View Full Résumé
      </Button>
    </div>
  );
};

export default Experience;
