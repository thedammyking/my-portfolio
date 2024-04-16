'use client';

import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import { AngleDownIcon } from '@/assets';
import { useAccordion, useAccordionItem } from '@/providers/AccordionProvider';

const AccordionHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { activeAccordion } = useAccordion();
  const { itemId } = useAccordionItem();
  const isActive = activeAccordion === itemId;

  return (
    <div
      className={cx('relative group', className, {
        ['is-active']: isActive
      })}
      {...props}
    >
      {children}
      <span className='absolute block w-6 h-6 right-0 top-[50%] translate-y-[-50%]'>
        <AngleDownIcon className='transition-transform ease-in-out duration-300 group-[.is-active]:rotate-180' />
      </span>
    </div>
  );
};

export default AccordionHeader;
