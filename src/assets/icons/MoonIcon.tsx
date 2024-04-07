import React, { SVGAttributes } from 'react';

const MoonIcon: React.FC<SVGAttributes<any>> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			{...props}>
			<path
				d='M6.33333 1.33335C5.12 1.33335 3.98 1.66669 3 2.23335C4.99333 3.38669 6.33333 5.53336 6.33333 8.00002C6.33333 10.4667 4.99333 12.6134 3 13.7667C3.98 14.3334 5.12 14.6667 6.33333 14.6667C10.0133 14.6667 13 11.68 13 8.00002C13 4.32002 10.0133 1.33335 6.33333 1.33335Z'
				fill='currentcolor'
			/>
		</svg>
	);
};

export default MoonIcon;
