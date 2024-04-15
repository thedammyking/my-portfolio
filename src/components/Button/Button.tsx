import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import { ButtonVariant } from '@/types/enums';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, icon, className, ...props }) => {
  return (
    <button
      className={cx(
        'text-base font-medium flex items-center',
        {
          ['selector rounded-lg bg-accent-dark lg:hover:bg-accent-light dark:bg-accent-light lg:dark:hover:bg-accent-dark w-full md:w-max min-w-[168px] leading-tight h-14 px-12 text-white']:
            variant === ButtonVariant.Primary,
          ['leading-normal text-black dark:text-white lg:hover:text-accent-dark lg:dark:hover:text-accent-light']:
            variant === ButtonVariant.Text
        },
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className='block w-4 h-4 ml-1'>{icon}</span>}
    </button>
  );
};

export default Button;
