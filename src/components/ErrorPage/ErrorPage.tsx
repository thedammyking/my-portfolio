'use client';

import React from 'react';

import { ButtonVariant } from '@/types/enums';

import Button from '../Button';
import Footer from '../Footer';

import '../../styles/base.scss';

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
    <>
      <main className='w-full min-h-[85.3vh] sm:min-h-[88.3vh] xl:min-h-[91vh] relative text-center flex flex-col justify-center items-center text-black dark:text-white pt-[88px] pb-[87px] px-6'>
        <h1 className='text-[70px] md:text-[140px] mb-[16px] md:mb-[30px] leading-normal font-bold'>
          {title}
        </h1>
        <h2 className='text-[28px] md:text-5xl mb-[8px] md:mb-[13px] leading-[33.60px] font-semibold md:leading-[56px]'>
          {subTitle}
        </h2>
        <p className='text-opacity-80 body-text text-lg mb-6 md:mb-10 leading-7'>{description}</p>
        <Button variant={ButtonVariant.Primary} onClick={action.onClick}>
          {action.label}
        </Button>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
