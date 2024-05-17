'use client';

import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

import { Experience as ExperienceData } from '@/types/interfaces/experience';

import ExperienceEntry from './ExperienceEntry';

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, paddingVertical: 20, borderBottom: '1px solid #E5E5E5' },
  heading: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: 'semibold',
    marginBottom: 10
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20
  }
});

interface ExperienceProps {
  data: ExperienceData[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Work Experience</Text>
      <View style={styles.list}>
        {data?.map(entry => <ExperienceEntry data={entry} key={uniqueId('experience-entry')} />)}
      </View>
    </View>
  );
};

export default Experience;
