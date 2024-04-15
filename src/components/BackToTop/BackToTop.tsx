'use client';

import React from 'react';
import cx from 'classnames';

import { AngleUpIcon } from '@/assets';

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [setIsVisible]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cx(
        'z-50 fixed w-full left-0 right-0 opacity-0 flex justify-center bottom-10 md:bottom-12 transition-opacity ease-in-out duration-300',
        {
          ['opacity-100']: isVisible
        }
      )}
    >
      <div className='w-full max-w-[1280px] '>
        <button
          aria-label='Back To Top'
          className='relative w-10 h-10 p-1 bg-light-grey-100 dark:bg-dark-grey-600 rounded-full overflow-hidden flex justify-center items-center ml-auto xl:mr-20 lg:mr-12 md:mr-8 mr-4 text-black dark:text-white'
          onClick={() =>
            window?.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          <AngleUpIcon />
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
