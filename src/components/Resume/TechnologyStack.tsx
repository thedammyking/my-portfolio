'use client';

import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

import { Skills, Stack } from '@/types/interfaces/Resume';

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, paddingVertical: 20, borderBottom: '1px solid #E5E5E5' },
  heading: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: 'semibold',
    marginBottom: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'flex-start'
  },
  itemText: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    lineHeight: 1.5,
    fontSize: 11
  },
  label: { fontWeight: 'semibold', padding: 2, width: '24%' },
  value: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 5, width: '76%' },
  valueText: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    color: '#0279CE',
    fontWeight: 'medium',
    lineHeight: 1.2,
    backgroundColor: 'rgb(2 121 206 / 0.1)',
    fontSize: 10
  }
});

interface TechnologyStackProps {
  data: Stack | null;
  expertise: Skills['expertise'];
}

const TechnologyStack: React.FC<TechnologyStackProps> = ({ data, expertise }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Key Skills and Technologies</Text>
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Languages:</Text>
        <View style={styles.value}>
          {data?.languages.map(language => (
            <Text style={[styles.itemText, styles.valueText]} key={uniqueId('language')}>
              {language}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Libraries/Frameworks:</Text>
        <View style={styles.value}>
          {data?.frameworks.map(framework => (
            <Text style={[styles.itemText, styles.valueText]} key={uniqueId('framework')}>
              {framework}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Tools:</Text>
        <View style={styles.value}>
          {data?.tools.map(tool => (
            <Text style={[styles.itemText, styles.valueText]} key={uniqueId('tool')}>
              {tool}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Expertise:</Text>
        <View style={styles.value}>
          {expertise.map(item => (
            <Text style={[styles.itemText, styles.valueText]} key={uniqueId('expertise')}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </View>
  </View>
);

export default TechnologyStack;
