import React from 'react';

import { AccordionProvider } from '@/providers/AccordionProvider';

const Accordion: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AccordionProvider>{children}</AccordionProvider>;
};

export default Accordion;
