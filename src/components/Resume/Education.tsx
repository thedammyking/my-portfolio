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
  degree: { fontFamily: 'Inter', fontWeight: 'medium', fontSize: 12, marginBottom: 5 },
  school: { fontFamily: 'Inter', fontWeight: 'medium', fontSize: 12, marginBottom: 4 },
  duration: { fontFamily: 'Inter', fontSize: 11 }
});

const Education = () => (
  <View style={styles.section}>
    <Text style={styles.heading}>Education</Text>
    <Text style={styles.degree}>Bachelor of Science in Computer Engineering</Text>
    <Text style={styles.school}>Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria</Text>
    <Text style={styles.duration}>2013 - 2019</Text>
  </View>
);

export default Education;
