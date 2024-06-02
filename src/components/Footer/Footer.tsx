'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-5'>
      <p className='text-dark-grey-400 text-sm leading-5 text-center md:text-left font-medium'>
        &copy; {`${currentYear}`} - Oluwadamilola, Senior Frontend Engineer. Built with Next.js,
        Tailwind CSS and Decap CMS, developed in VSCode and deployed with Netlify.
      </p>
    </footer>
  );
};

export default Footer;
