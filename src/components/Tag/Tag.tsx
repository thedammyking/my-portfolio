import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

const Tag: React.FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cx(
        'text-xs font-medium leading-none text-accent-dark dark:text-accent-light px-3 py-2 bg-accent-dark dark:bg-accent-light bg-opacity-10 dark:bg-opacity-[0.1] rounded-2xl flex justify-center items-center',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
