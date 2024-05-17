'use client';

import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: { paddingHorizontal: 30, paddingVertical: 20 },
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

const Skills = () => (
  <View style={styles.section}>
    <Text style={styles.heading}>Skills</Text>
    <Text style={styles.text}>Web application development, Leadership, Problem Solving</Text>
  </View>
);

export default Skills;
