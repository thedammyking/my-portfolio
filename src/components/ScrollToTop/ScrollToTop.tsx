'use client';

import React from 'react';

const ScrollToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';

  React.useEffect(() => {
    if (isBrowser()) {
      window.scroll(0, 0);
    }
  }, []);
  return null;
};

export default ScrollToTop;
