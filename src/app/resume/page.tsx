import React from 'react';

import { Viewer } from '@/components/Resume';
import { getAllExperience } from '@/lib/api/experience';
import { getAboutData, getHeaderData } from '@/lib/api/home';
import DataProvider from '@/providers/DataProvider';

export default async function Resume() {
  const pageData = {
    header: await getHeaderData(),
    about: await getAboutData(),
    experience: await getAllExperience()
  };

  return (
    <DataProvider {...pageData}>
      <Viewer />
    </DataProvider>
  );
}
