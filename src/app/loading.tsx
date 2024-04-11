import React from 'react';

import { Loader } from 'src/assets';

export default function Loading() {
	return (
		<main className='w-full h-[78.3vh] relative'>
			<Loader className='w-16 md:w-20 text-black dark:text-dark-grey-100 absolute top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
		</main>
	);
}
