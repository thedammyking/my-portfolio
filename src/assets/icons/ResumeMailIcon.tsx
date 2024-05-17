import React from 'react';
import { Path, Svg, SVGProps } from '@react-pdf/renderer';

const MailIcon: React.FC<SVGProps> = props => {
  return (
    <Svg width='48' height='48' viewBox='0 0 48 48' fill='none' {...props}>
      <Path
        fillRule='evenodd'
        d='M44.85 11.052L25.911 26.736C25.3728 27.1819 24.6959 27.4259 23.997 27.4259C23.2981 27.4259 22.6212 27.1819 22.083 26.736L3.153 11.052C3.05138 11.3577 2.99971 11.6778 3 12V36C3 36.7956 3.31607 37.5587 3.87868 38.1213C4.44129 38.6839 5.20435 39 6 39H42C42.7957 39 43.5587 38.6839 44.1213 38.1213C44.6839 37.5587 45 36.7956 45 36V12C45.0013 11.678 44.9506 11.3579 44.85 11.052ZM6 6H42C43.5913 6 45.1174 6.63214 46.2426 7.75736C47.3679 8.88258 48 10.4087 48 12V36C48 37.5913 47.3679 39.1174 46.2426 40.2426C45.1174 41.3679 43.5913 42 42 42H6C4.4087 42 2.88258 41.3679 1.75736 40.2426C0.632141 39.1174 0 37.5913 0 36V12C0 10.4087 0.632141 8.88258 1.75736 7.75736C2.88258 6.63214 4.4087 6 6 6ZM5.37 9L22.098 22.809C22.6338 23.2515 23.3065 23.4943 24.0014 23.496C24.6963 23.4976 25.3702 23.258 25.908 22.818L42.804 9H5.37Z'
        fill='#0279CE'
      />
    </Svg>
  );
};

export default MailIcon;