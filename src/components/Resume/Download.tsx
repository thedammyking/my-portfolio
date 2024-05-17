'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { Data } from '@/providers/DataProvider';

import Resume from '.';

interface DownloadProps {
  data: Data;
}

const Download = dynamic(
  () =>
    import('@react-pdf/renderer').then(
      modules =>
        function Download({ data }: DownloadProps) {
          const [instance] = modules.usePDF({ document: <Resume data={data} /> });

          return (
            <>
              {instance.url && (
                <a hidden href={instance.url} target='_blank' download='Oluwadamilola-resume.pdf' />
              )}
            </>
          );
        }
    ),
  {
    ssr: false,
    loading: () => <p hidden>Loading...</p>
  }
);

export default Download;
