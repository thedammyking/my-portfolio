import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

const Tags: React.FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cx(
        'text-xs font-medium leading-none text-accent-dark dark:text-accent-light px-3 py-1 bg-accent-dark dark:bg-accent-light bg-opacity-10 dark:bg-opacity-[0.1] rounded-2xl justify-center items-center',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tags;
