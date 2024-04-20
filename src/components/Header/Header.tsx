'use client';

import React from 'react';
import Link from 'next/link';

import { useData } from '@/providers/DataProvider';

import ContactList from '../ContactList';
import Navigation from '../Navigation';

import '../../styles/base.scss';

const Header: React.FC = () => {
  const { header } = useData();
  return (
    <header className='mb-16 md:mb-24 lg:mb-0 lg:sticky lg:top-0 lg:py-[88px] lg:max-h-screen lg:w-1/2'>
      <Link href='/'>
        <h1 className='text-[40px] xl:text-[70px] md:text-16 lg:text-[60px] font-bold tracking-tight font-header leading-[1.05] mb-3'>
          {header?.name}
        </h1>
      </Link>
      <h4 className='text-xl md:text-2xl font-normal font-header leading-[1.25] mb-4'>
        {header?.role}
      </h4>
      <p className='leading-normal text-lg md:text-base font-normal font-header body-text mb-12'>
        {header?.summary}
      </p>
      <ContactList />
      <Navigation />
    </header>
  );
};

export default Header;
