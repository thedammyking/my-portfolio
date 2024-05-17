'use client';

import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

import { formatDate } from '@/lib/dateUtils';
import { Experience } from '@/types/interfaces/experience';

// Create styles
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5
  },
  title: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    lineHeight: 1.5,
    fontSize: 12,
    fontWeight: 'semibold'
  },
  company: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    lineHeight: 1.5,
    fontSize: 11,
    fontWeight: 'medium'
  },
  companyName: {
    width: '70%'
  },
  duration: {
    width: '30%',
    textAlign: 'right'
  },
  companyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  textContainer: { display: 'flex', flexDirection: 'column', rowGap: 3, marginTop: 7 },
  text: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    lineHeight: 1.5,
    fontSize: 11
  }
});

interface ExperienceEntryProps {
  data: Experience;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ data }) => {
  const roles = data.roles
    .sort((role1, role2) => new Date(role2.from).getTime() - new Date(role1.from).getTime())
    .map(role => ({
      ...role,
      summary: role.body.split('\n')
    }));

  return roles.map(({ summary, role, from, to }) => (
    <View key={uniqueId('experience')} style={styles.wrapper}>
      <Text style={styles.title}>{role}</Text>
      <View style={styles.companyContainer}>
        <Text style={[styles.company, styles.companyName]}>
          {data.company} ({data.location})
        </Text>
        <Text style={[styles.company, styles.duration]}>
          {formatDate(from)} - {formatDate(to, 'Present')}
        </Text>
      </View>
      <View style={styles.textContainer}>
        {summary.map(text => (
          <Text key={uniqueId('experience-summary')} style={styles.text}>
            {text}
          </Text>
        ))}
      </View>
    </View>
  ));
};

export default ExperienceEntry;
