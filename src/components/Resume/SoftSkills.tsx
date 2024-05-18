'use client';

import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

import { Skills } from '@/types/interfaces/Resume';

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, paddingVertical: 20 },
  heading: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: 'semibold',
    marginBottom: 10
  },
  value: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  valueText: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    color: '#0279CE',
    fontWeight: 'medium',
    lineHeight: 1.2,
    backgroundColor: 'rgb(2 121 206 / 0.1)',
    fontFamily: 'Inter',
    fontSize: 10
  }
});

interface SoftSkillsProps {
  data: Skills['softSkills'];
}

const SoftSkills: React.FC<SoftSkillsProps> = ({ data }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Soft Skills</Text>
    <View style={styles.value}>
      {data.map(skill => (
        <Text style={styles.valueText} key={uniqueId('skill')}>
          {skill}
        </Text>
      ))}
    </View>
  </View>
);

export default SoftSkills;
