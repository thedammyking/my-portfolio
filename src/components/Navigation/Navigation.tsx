'use client';

import React from 'react';
import { uniqueId } from 'lodash';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION_LINKS } from 'src/data/contants';

import NavigationItem from './NavigationItem';

const Navigation = () => {
  const pathName = usePathname();
  console.log('pathName :>> ', pathName);
  return (
    <nav role='navigation'>
      <ul className='list-none hidden lg:flex flex-col gap-4'>
        {NAVIGATION_LINKS.map(link => (
          <li key={uniqueId('navigation')}>
            <Link href={`#${link.toLowerCase()}`}>
              <NavigationItem label={link} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
