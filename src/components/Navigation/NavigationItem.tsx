import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { omit } from 'lodash';

import styles from './Navigation.module.scss';

interface NavigationItemProps extends HTMLAttributes<HTMLParagraphElement> {
  label: string;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, active, className, ...props }) => {
  return (
    <p
      className={cx(
        'group py-2 w-max text-dark-grey-400 hover:text-black active:text-black dark:hover:text-white dark:active:text-white text-xs font-bold uppercase leading-none flex items-center gap-4',
        className,
        {
          [styles.NavigationItem_active]: active
        }
      )}
      {...omit(props, ['children'])}
    >
      <span className='sr-only'>{label}</span>
      <span className='w-8 h-px text-current bg-current group-hover:w-16 group-active:w-16 transition-all ease-in-out duration-300' />
      {label}
    </p>
  );
};

export default NavigationItem;
