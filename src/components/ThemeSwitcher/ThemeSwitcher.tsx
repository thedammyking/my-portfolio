'use client';

import React from 'react';
import cx from 'classnames';
import { useTheme } from 'next-themes';

import { LightIcon, MoonIcon, SystemIcon } from '@/assets';
import { ThemeMode } from '@/types/enums';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { resolvedTheme, theme: activeMode, setTheme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className='z-50 fixed w-full left-0 right-0 flex justify-center top-4 md:top-6'>
      <div className='w-full max-w-[1280px]'>
        <div className='relative w-max h-10 p-1 bg-light-grey-100 dark:bg-dark-grey-600 rounded-full overflow-hidden flex justify-between items-center ml-auto xl:mr-20 lg:mr-12 md:mr-8 mr-4 text-black dark:text-white'>
          <span className='sr-only'>Switch Theme</span>
          <button
            className={cx(styles.ThemeSwitcher_button, {
              ['bg-black']: activeMode === ThemeMode.Dark && isMounted
            })}
            onClick={() => setTheme(ThemeMode.Dark)}
            aria-label='Theme Switch'
          >
            <MoonIcon />
          </button>
          <button
            className={cx(styles.ThemeSwitcher_button, {
              ['bg-black']:
                resolvedTheme === ThemeMode.Dark && activeMode === ThemeMode.System && isMounted,
              ['bg-white']:
                resolvedTheme === ThemeMode.Light && activeMode === ThemeMode.System && isMounted
            })}
            onClick={() => setTheme(ThemeMode.System)}
            aria-label='Theme Switch'
          >
            <SystemIcon />
          </button>
          <button
            className={cx(styles.ThemeSwitcher_button, {
              ['bg-white']: activeMode === ThemeMode.Light && isMounted
            })}
            onClick={() => setTheme(ThemeMode.Light)}
            aria-label='Theme Switch'
          >
            <LightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
