import React from 'react';
import { uniqueId } from 'lodash';
import Link from 'next/link';

import { NAVIGATION_LINKS } from 'src/data/contants';

const Navigation = () => {
  return (
    <nav role='navigation'>
      <ul className='list-none flex flex-col gap-4'>
        {NAVIGATION_LINKS.map(link => (
          <li key={uniqueId('navigation')}>
            <Link
              className='group py-2 w-max text-dark-grey-400 hover:text-black active:text-black dark:hover:text-white dark:active:text-white text-xs font-bold uppercase leading-none lg:flex hidden items-center gap-4'
              href={`#${link.toLowerCase()}`}
            >
              <span className='sr-only'>{link}</span>
              <span className='tracking-wider w-8 h-px text-current bg-current group-hover:w-16 group-active:w-16 transition-all ease-in-out duration-300' />
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
