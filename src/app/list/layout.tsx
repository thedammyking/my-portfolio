import React from 'react';

import InnerPagesLayout from '@/components/InnerPagesLayout';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return <InnerPagesLayout>{children}</InnerPagesLayout>;
}
