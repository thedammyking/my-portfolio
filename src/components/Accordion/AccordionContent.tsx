'use client';

import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import { useAccordion, useAccordionItem } from '@/providers/AccordionProvider';

const AccordionContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { activeAccordion } = useAccordion();
  const { itemId } = useAccordionItem();
  const isActive = activeAccordion === itemId;
  return (
    <div
      className={cx('relative overflow-hidden', {
        ['h-0']: !isActive
      })}
      {...props}
    >
      <div className={cx('top-0 left-0 right-0 bottom-0', className)}>{children}</div>
    </div>
  );
};

export default AccordionContent;
