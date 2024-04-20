import React from 'react';

import { Loader } from '@/assets';
import Footer from '@/components/Footer';

export default function Loading() {
  return (
    <>
      <main className='w-full min-h-[85.3vh] sm:min-h-[88.3vh] xl:min-h-[91vh] relative'>
        <Loader className='w-16 md:w-20 text-black dark:text-dark-grey-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
      </main>
      <Footer />
    </>
  );
}
