'use client';

import React from 'react';

interface ErrorPageProps {
  title: string;
  subTitle: string;
  description: string;
  action: {
    label: string;
    onClick: () => void;
  };
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title, subTitle, description, action }) => {
  return (
    <main className='w-full min-h-[78.3vh] relative text-center text-black dark:text-white pt-[88px] pb-[87px] px-6'>
      <h1 className='text-[70px] md:text-[140px] mb-[16px] md:mb-[30px] leading-normal'>{title}</h1>
      <h3 className='text-[28px] md:text-5xl mb-[8px] md:mb-[13px] leading-[33.60px] md:leading-[56px]'>
        {subTitle}
      </h3>
      <p className='text-opacity-80 text-xl mb-[24px] md:mb-[40px] leading-7'>{description}</p>
      <button
        className='selector rounded-lg bg-accent-dark dark:bg-accent-light w-full md:w-max min-w-[168px] leading-tight h-14 px-12 text-white dark:text-white text-base font-bold'
        onClick={action.onClick}
      >
        {action.label}
      </button>
    </main>
  );
};

export default ErrorPage;
