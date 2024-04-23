import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import '../../styles/base.scss';

interface NavigationItemProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'children'> {
  label: string;
  active?: boolean;
  inContent?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  active,
  inContent,
  className,
  ...props
}) => {
  return (
    <div
      className={cx('group lg:w-max', {
        ['is-active']: active
      })}
    >
      <p
        className={cx(
          ' py-2 w-max body-text lg:hover:text-black active:text-black lg:dark:hover:text-white dark:active:text-white group-[.is-active]:text-black group-[.is-active]:dark:text-white text-xs font-bold uppercase leading-none flex items-center gap-4 transition-colors ease-in-out duration-200',
          className
        )}
        {...props}
      >
        <span className='sr-only'>{label}</span>
        {!inContent && (
          <span className='w-8 h-px text-current bg-current lg:group-hover:w-16 group-active:w-16 group-[.is-active]:w-16  transition-width ease-in-out duration-200' />
        )}
        {label}
      </p>
    </div>
  );
};

export default NavigationItem;
