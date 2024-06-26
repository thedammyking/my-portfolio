import React from 'react';
import { uniqueId } from 'lodash';

import { CONTACT_LINKS } from '@/data/contants';

const ContactList: React.FC = () => {
  return (
    <ul
      role='list'
      className='list-none flex flex-wrap gap-3 sm:gap-5 lg:mb-16'
      aria-label='Contacts and Social medai'
    >
      {CONTACT_LINKS.map(({ icon: I, ...link }) => {
        return (
          <li key={uniqueId('contact-link')}>
            <a
              className='flex justify-center items-center w-11 h-11 rounded-full bg-light-grey-100 dark:bg-dark-grey-600 lg:hover:bg-dark-grey-600 lg:dark:hover:bg-light-grey-100 text-black dark:text-white lg:hover:text-white lg:dark:hover:text-black transition-all ease-in-out duration-300'
              href={link.url}
              title={link.label}
              rel='noreferrer'
              target='_blank'
            >
              <span className='sr-only'>{link.label}</span>
              <I className='w-5 h-5 text-current' />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
