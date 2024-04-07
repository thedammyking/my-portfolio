import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			colors: {
				black: '#1A1A1A',
				white: '#FFFFFF',
				accent: '#158CE1',
				'dark-grey': {
					100: '#D6D4D4',
					200: '#A8A8A8',
					300: '#727272',
					400: '#666666',
					500: '#3B3B3B',
					600: '#242424',
				},
				'light-grey': {
					100: '#E5E5E5',
					200: '#DBDBDB',
					300: '#C4C4C4',
					400: '#767575',
					500: '#767676',
					600: '#515151',
					700: '#1F1F1F',
				},
			},
		},
	},
	plugins: [],
};
export default config;
