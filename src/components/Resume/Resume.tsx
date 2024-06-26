'use client';

import React from 'react';
import { Document, Font, Page, StyleSheet, Text } from '@react-pdf/renderer';

import { Data } from '@/providers/DataProvider';

import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import SoftSkills from './SoftSkills';
import Summary from './Summary';
import TechnologyStack from './TechnologyStack';

const styles = StyleSheet.create({
  page: { paddingTop: 30, paddingBottom: 35 },
  pageNumber: {
    position: 'absolute',
    fontSize: 11,
    lineHeight: 1,
    fontFamily: 'Inter',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#1A1A1A'
  }
});

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://res.cloudinary.com/ds8bd6wxr/raw/upload/v1715929184/my-portfolio/font-inter/Inter-Regular_n4eg1m.ttf'
    },
    {
      src: 'https://res.cloudinary.com/ds8bd6wxr/raw/upload/v1715929185/my-portfolio/font-inter/Inter-Medium_wcq3oz.ttf',
      fontWeight: 500
    },
    {
      src: 'https://res.cloudinary.com/ds8bd6wxr/raw/upload/v1715929185/my-portfolio/font-inter/Inter-SemiBold_ihjout.ttf',
      fontWeight: 600
    }
  ]
});

interface ResumeProps {
  data: Data;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const { experience, header, skills, stack, summary } = data;
  return (
    <Document
      title='Oluwadamilola Resume'
      subject='Oluwadamilola Resume'
      author='Oluwadamilola Babalola'
      creator='Oluwadamilola Babalola'
      producer='Oluwadamilola Babalola'
      creationDate={new Date()}
      keywords='Oluwadamilola Babalola, Resume, Senior Frontend Engineer'
    >
      <Page size='A4' style={styles.page}>
        <Header data={header || null} />
        <Summary data={summary || null} />
        <TechnologyStack data={stack || null} expertise={skills?.expertise || []} />
        <Experience data={experience || []} />
        <Education />
        <SoftSkills data={skills?.softSkills || []} />
        <Text
          fixed
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            totalPages <= 1 ? '' : `${header?.name} Page ${pageNumber}`
          }
        />
      </Page>
    </Document>
  );
};

export default Resume;
