import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

const Card: React.FC<CardProps> = ({ label, className, ...props }) => {
  return (
    <div
      aria-label={label}
      className={cx(
        'group relative w-full rounded-lg border border-neutral-100 dark:border-neutral-800 lg:dark:hover:bg-gradient-to-br lg:dark:hover:from-neutral-800 lg:dark:hover:to-neutral-800 lg:hover:bg-gradient-to-br lg:hover:from-neutral-100 lg:hover:to-neutral-100 lg:transition-all lg:ease-in-out lg:duration-300',
        className
      )}
      {...props}
    />
  );
};

export default Card;
