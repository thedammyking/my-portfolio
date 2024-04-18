import React from 'react';
import Link from 'next/link';

import { ArrowLeftIcon } from '@/assets';
import ScrollToTop from '@/components/ScrollToTop';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='lg:py-24 w-full'>
      <ScrollToTop />
      <nav className='w-full mb-3'>
        <Link href='/'>
          <p className='relative flex items-center gap-1 text-accent-dark dark:text-accent-light lg:hover:text-accent-light lg:dark:hover:text-accent-dark text-base font-semibold leading-normal'>
            <ArrowLeftIcon className='w-6 h-6' /> Oluwadamilola Babalola
          </p>
        </Link>
      </nav>
      {children}
    </div>
  );
}