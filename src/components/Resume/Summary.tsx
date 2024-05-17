'use client';

import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { Summary as SummaryData } from '@/types/interfaces/Resume';

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, paddingVertical: 20, borderBottom: '1px solid #E5E5E5' },
  heading: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: 'semibold',
    marginBottom: 10
  },
  text: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    fontSize: 11,
    lineHeight: 1.5
  }
});

interface SummaryProps {
  data: SummaryData | null;
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  const summary = data?.content.split('\n').join(' ');
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Summary</Text>
      <Text style={styles.text}>{summary}</Text>
    </View>
  );
};

export default Summary;
