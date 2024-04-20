'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-5'>
      <p className='text-dark-grey-400 text-sm leading-5 text-center md:text-left font-medium'>
        &copy; {`${currentYear}`} - Oluwadamilola Babalola. Designed by{' '}
        <a
          href='/'
          rel='noreferrer'
          target='_blank'
          className='dark:text-light-grey-100 text-black'
        >
          Templatecookie
        </a>{' '}
        and developed in VSCode by yours truly. Built with Next.js and Tailwind CSS, deployed with
        Netlify.
      </p>
    </footer>
  );
};

export default Footer;
