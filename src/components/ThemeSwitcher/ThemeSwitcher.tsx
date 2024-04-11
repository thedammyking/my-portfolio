'use client';

import React from 'react';
import cx from 'classnames';
import { useTheme } from 'next-themes';

import { LightIcon, MoonIcon } from 'src/assets';

import { ThemeMode } from 'src/types/globals';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme: activeMode, setTheme } = useTheme();

  const toggleThemeMode = () => {
    if (activeMode === ThemeMode.Dark) return setTheme(ThemeMode.Light);
    if (activeMode === ThemeMode.Light) return setTheme(ThemeMode.Dark);
  };

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className='z-50 fixed w-full left-0 right-0 flex justify-center top-4 md:top-6'>
      <div className='w-full max-w-[1280px]'>
        <button
          aria-label='Theme Switch'
          className='relative w-[76px] h-10 p-1 bg-light-grey-100 dark:bg-dark-grey-600 rounded-full overflow-hidden flex justify-between items-center ml-auto xl:mr-20 mr-8 text-black dark:text-white'
          onClick={toggleThemeMode}
        >
          <span className='sr-only'>Switch Theme</span>
          <span
            className={cx(styles.ThemeSwitcher_icon, {
              ['bg-black']: activeMode === ThemeMode.Dark && isMounted
            })}
          >
            <MoonIcon />
          </span>
          <span
            className={cx(styles.ThemeSwitcher_icon, {
              ['bg-white']: activeMode === ThemeMode.Light && isMounted
            })}
          >
            <LightIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
