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
  text: {
    fontFamily: 'Inter',
    color: '#1A1A1A',
    fontSize: 11,
    lineHeight: 1.5
  }
});

const Summary = () => (
  <View style={styles.section}>
    <Text style={styles.heading}>Summary</Text>
    <Text style={styles.text}>
      A skilled Senior Frontend Engineer with over 7 years of experience, I began my programming
      journey in 2013 with scripting in Linux OS, which sparked my interest in software development.
      My expertise lies in managing engineering teams and overseeing multiple projects to enhance
      technical processes. I specialize in building scalable, user-friendly, and high-performing
      frontend applications. I have consistently demonstrated the ability to master new technologies
      and lead teams in developing digital products that align with business objectives and enhance
      user engagement.
    </Text>
  </View>
);

export default Summary;
