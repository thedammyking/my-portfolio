import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import { NavigationItem } from '../Navigation';

import styles from './ContentContainer.module.scss';

interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  label,
  className,
  ...props
}) => {
  return (
    <aside
      {...props}
      className={cx(styles.ContentContainer, 'w-full flex justify-center', className)}
    >
      <div className='w-full max-w-[1280px] lg:px-20 h-max'>
        <div className='lg:ml-auto lg:max-w-[477px] lg:w-[42.589%]'>
          <div className='lg:hidden w-full bg-[var(--background)'>
            <NavigationItem label={label} className='py-[30px]' />
          </div>
          {children}
        </div>
      </div>
    </aside>
  );
};

export default ContentContainer;
