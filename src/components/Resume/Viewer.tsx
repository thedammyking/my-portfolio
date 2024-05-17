'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { useData } from '@/providers/DataProvider';

import Resume from './Resume';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const Viewer = () => {
  const data = useData();
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Resume data={data} />
    </PDFViewer>
  );
};

export default Viewer;
