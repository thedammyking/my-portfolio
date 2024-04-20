import React from 'react';

import { AccordionProvider } from '@/providers/AccordionProvider';

const Accordion: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AccordionProvider>
      <ul className='list-none'>{children}</ul>
    </AccordionProvider>
  );
};

export default Accordion;
