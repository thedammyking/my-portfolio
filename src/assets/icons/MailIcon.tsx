import React, { SVGAttributes } from 'react';

const InstagramIcon: React.FC<SVGAttributes<any>> = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='envelope' {...props}>
      <path
        fill='currentcolor'
        d='M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z'
      ></path>
    </svg>
  );
};

export default InstagramIcon;