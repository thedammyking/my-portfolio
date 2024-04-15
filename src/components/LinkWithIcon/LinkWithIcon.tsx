import React, { AnchorHTMLAttributes } from 'react';

import { LinkIcon } from '@/assets';

const LinkWithIcon: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a {...props} rel='noreferrer' target='_blank'>
      <span className='flex gap-1 items-center text-sm font-medium leading-tight text-light-grey-700 dark:text-dark-grey-100 lg:hover:text-accent-dark lg:dark:hover:text-accent-light lg:transition-colors lg:ease-in-out lg:duration-300'>
        <span>
          <LinkIcon className='w-3 h-3 text-current' />
        </span>{' '}
        {children}
      </span>
    </a>
  );
};

export default LinkWithIcon;
