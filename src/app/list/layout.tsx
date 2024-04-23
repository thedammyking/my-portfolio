import React from 'react';
import Link from 'next/link';

import { ArrowLeftIcon } from '@/assets';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='py-20 md:py-24 w-full min-h-[92.5vh]'>
        <ScrollToTop />
        <nav className='w-full mb-3'>
          <Link href='/'>
            <p className='relative flex items-center z-[99] gap-1 text-accent-dark dark:text-accent-light lg:hover:text-accent-light lg:dark:hover:text-accent-dark text-base font-semibold leading-normal'>
              <ArrowLeftIcon className='w-6 h-6' /> Oluwadamilola Babalola
            </p>
          </Link>
        </nav>
        {children}
      </div>
      <Footer />
    </>
  );
}
