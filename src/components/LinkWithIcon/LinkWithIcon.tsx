import React, { AnchorHTMLAttributes, ReactNode } from 'react';

import { LinkIcon } from '@/assets';

import '../../styles/base.scss';

interface LinkWithIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ children, icon, ...props }) => {
  return (
    <a {...props} rel='noreferrer' target='_blank'>
      <span className='flex gap-1 items-center text-sm font-medium leading-tight body-text lg:hover:text-accent-dark lg:dark:hover:text-accent-light lg:transition-colors lg:ease-in-out lg:duration-300'>
        <span className='w-4 h-4 flex items-center justify-center'>
          {icon ? icon : <LinkIcon />}
        </span>
        {children}
      </span>
    </a>
  );
};

export default LinkWithIcon;
