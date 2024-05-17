'use client';

import React from 'react';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { uniqueId } from 'lodash';

import { RESUME_CONTACT_LINKS } from '@/data/contants';
import { Header as HeaderData } from '@/types/interfaces/home';

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    borderBottom: '1px solid #E5E5E5'
  },
  name: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'medium',
    color: '#1A1A1A'
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 14,
    marginTop: 5,
    color: '#515151',
    fontWeight: 'medium'
  },
  contactDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 10,
    marginTop: 12
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%'
  },
  contactInfoIcon: {
    width: 10,
    height: 10,
    marginRight: 6
  },
  contactInfoLinkText: {
    color: '#0279CE',
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 'medium'
  }
});

interface HeaderProps {
  data: HeaderData | null;
}

const Header: React.FC<HeaderProps> = ({ data }) => (
  <View style={styles.section}>
    <Text style={styles.name}>{data?.name}</Text>
    <Text style={styles.title}>{data?.role}</Text>
    <View style={styles.contactDetails}>
      {RESUME_CONTACT_LINKS.map(({ icon: Icon, label, url }) => {
        return (
          <View key={uniqueId('contact')} style={styles.contactInfo}>
            <Icon style={styles.contactInfoIcon} />
            {url ? (
              <Link src={url}>
                <Text style={styles.contactInfoLinkText}>{label}</Text>
              </Link>
            ) : (
              <Text style={styles.contactInfoLinkText}>{label}</Text>
            )}
          </View>
        );
      })}
    </View>
  </View>
);

export default Header;
