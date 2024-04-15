import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import ContactList from '../ContactList';
import Navigation from '../Navigation';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header
      className={cx(
        styles.Header,
        'mb-16 md:mb-24 lg:mb-0 lg:sticky lg:top-0 lg:py-[88px] lg:max-h-screen lg:w-1/2'
      )}
    >
      <Link href='/'>
        <h1 className='text-[40px] xl:text-[70px] md:text-16 lg:text-[60px] font-bold tracking-tight  leading-[1.05] mb-3'>
          Oluwadamilola Babalola
        </h1>
      </Link>
      <h4 className='text-xl md:text-2xl font-normal leading-[1.25] mb-4'>
        Lead Engineer at Brass
      </h4>
      <p className='leading-normal text-lg md:text-base font-normal body-text mb-12'>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
      <ContactList />
      <Navigation />
    </header>
  );
};

export default Header;
