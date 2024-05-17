'use client';

import { StyleSheet, Text, View } from '@react-pdf/renderer';

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
    rowGap: 4
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center'
  },
  itemText: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    lineHeight: 1.5,
    fontSize: 11
  },
  label: { fontWeight: 'semibold' }
});

const TechnologyStack = () => (
  <View style={styles.section}>
    <Text style={styles.heading}>Technology Stack</Text>
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Languages:</Text>
        <Text style={styles.itemText}>JavaScript, TypeScript</Text>
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Libraries/Frameworks:</Text>
        <Text style={styles.itemText}>React, Redux, NextJs, Redux Thunk</Text>
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.label]}>Tools:</Text>
        <Text style={styles.itemText}>Webpack, Rollup, Vite</Text>
      </View>
    </View>
  </View>
);

export default TechnologyStack;
