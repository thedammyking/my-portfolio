'use client';

import React from 'react';
import cx from 'classnames';
import { useTernaryDarkMode } from 'usehooks-ts';
import If from '../If/If';
import { LightIcon, MoonIcon } from 'src/assets';
import { THEME_MODE_KEY } from 'src/data/contants';
import { ThemeMode } from 'src/types/globals';
import useSetThemeToDocument from 'src/hooks/useSetThemeToDocument';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
	const { ternaryDarkMode: activeMode, setTernaryDarkMode: setTheme } =
		useTernaryDarkMode({
			defaultValue: ThemeMode.Dark,
			localStorageKey: THEME_MODE_KEY,
		});

	const toggleThemeMode = () => {
		if (activeMode === ThemeMode.Dark) return setTheme(ThemeMode.Light);
		if (activeMode === ThemeMode.Light) return setTheme(ThemeMode.Dark);
	};

	useSetThemeToDocument(activeMode as ThemeMode);

	return (
		<div className='fixed w-10 h-10 bg-light-grey-100 dark:bg-dark-grey-600 rounded-full overflow-hidden top-4 md:top-6 right-7 md:right-8 xl:right-20 z-50'>
			<button
				className='w-full h-full flex justify-center items-center'
				onClick={toggleThemeMode}>
				<If condition={activeMode === ThemeMode.Dark}>
					<MoonIcon
						className={cx(styles.ThemeSwitcher_svg, 'text-white')}
					/>
				</If>
				<If condition={activeMode === ThemeMode.Light}>
					<LightIcon
						className={cx(styles.ThemeSwitcher_svg, 'text-black')}
					/>
				</If>
			</button>
		</div>
	);
};

export default ThemeSwitcher;
