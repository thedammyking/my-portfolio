import React from 'react';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

const useSentryErrorReport = (error: Error & { digest?: string }) => {
	React.useEffect(() => {
		Sentry.captureException(error);
	}, [error]);
};

export default useSentryErrorReport;
