import Error from 'next/error';
import React from 'react';
import * as Sentry from '@sentry/nextjs';

const useSentryErrorReport = (error: Error & { digest?: string }) => {
	React.useEffect(() => {
		Sentry.captureException(error);
	}, [error]);
};

export default useSentryErrorReport;
