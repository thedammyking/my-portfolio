import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import ContactList from '../ContactList';
import Navigation from '../Navigation';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className='lg:fixed w-full left-0 right-0 flex justify-center top-[84px] lg:top-[88px] md:top-[96px]'>
      <div className='w-full max-w-[1280px]'>
        <header className={cx(styles.Header, 'md:max-w-[548px] lg:ml-20')}>
          <Link href='/'>
            <h1 className='text-[40px] lg:text-[70px] md:text-[64px] leading-[1.05] mb-3'>
              Oluwadamilola Babalola
            </h1>
          </Link>
          <h4 className='text-xl md:text-2xl font-normal leading-[1.25] mb-4'>
            Lead Engineer at Brass
          </h4>
          <p className='leading-normal text-lg md:text-base font-normal text-dark-grey-500 dark:text-dark-grey-200 mb-12'>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <ContactList />
          <Navigation />
        </header>
      </div>
    </div>
  );
};

export default Header;
