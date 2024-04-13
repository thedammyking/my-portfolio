'use client';

import React from 'react';
import { default as ErrorType } from 'next/error';

import ErrorPage from '@/components/ErrorPage';
import useSentryErrorReport from '@/hooks/useSentryErrorReport';

interface ErrorProps {
  error: ErrorType & { digest?: string };
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useSentryErrorReport(error);

  return (
    <ErrorPage
      title='Oops!'
      subTitle='Something went wrong'
      description='An unexpected error occured while you are trying to access this resource'
      action={{
        onClick: () => reset(),
        label: 'Reload'
      }}
    />
  );
};

export default Error;
