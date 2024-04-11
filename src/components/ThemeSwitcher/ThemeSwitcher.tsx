'use client';

import React from 'react';
import cx from 'classnames';
import { useTernaryDarkMode } from 'usehooks-ts';

import { LightIcon, MoonIcon } from 'src/assets';

import useSetThemeToDocument from 'src/hooks/useSetThemeToDocument';

import { THEME_MODE_KEY } from 'src/data/contants';

import { ThemeMode } from 'src/types/globals';

import If from '../If';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const { ternaryDarkMode: activeMode, setTernaryDarkMode: setTheme } = useTernaryDarkMode({
    defaultValue: ThemeMode.Dark,
    localStorageKey: THEME_MODE_KEY
  });

  const toggleThemeMode = () => {
    console.log('activeMode :>> ', activeMode);
    if (activeMode === ThemeMode.Dark) return setTheme(ThemeMode.Light);
    if (activeMode === ThemeMode.Light) return setTheme(ThemeMode.Dark);
    console.log('toggleThemeMode :>> ', 'done');
  };

  useSetThemeToDocument(activeMode as ThemeMode);

  return (
    <div className='z-50 fixed w-full left-0 right-0 flex justify-center top-4 md:top-6'>
      <div className='w-full max-w-[1280px]'>
        <button
          className='w-10 h-10 bg-light-grey-100 dark:bg-dark-grey-600 rounded-full overflow-hidden flex justify-center items-center ml-auto xl:mr-20 mr-8'
          onClick={toggleThemeMode}
        >
          <If condition={activeMode === ThemeMode.Dark}>
            <MoonIcon className={cx(styles.ThemeSwitcher_svg, 'text-white')} />
          </If>
          <If condition={activeMode === ThemeMode.Light}>
            <LightIcon className={cx(styles.ThemeSwitcher_svg, 'text-black')} />
          </If>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
