import React from 'react';
import { uniqueId } from 'lodash';

import { CONTACT_LINKS } from 'src/data/contants';

const ContactList: React.FC = () => {
  return (
    <ul
      role='list'
      className='list-none flex gap-5 mb-8 lg:mb-16'
      aria-label='Contacts and Social medai'
    >
      {CONTACT_LINKS.map(({ icon: I, ...link }) => {
        return (
          <li key={uniqueId('contact-link')}>
            <a
              className='block p-2 rounded-full bg-dark-grey-500 dark:bg-dark-grey-600 hover:bg-black dark:hover:bg-dark-grey-500 text-light-grey-100 dark:text-light-grey-300 hover:text-white transition-all ease-in-out duration-300'
              href={link.url}
            >
              <span className='sr-only'>{link.label}</span>
              <I className='w-6 h-6 text-current' />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
