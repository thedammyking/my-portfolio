'use client';

import React, { createContext, useContext } from 'react';

interface AccordionContextValue {
  activeAccordion: string | null;
  setActiveAccordion: (activeAccordion: string) => void;
}

interface AccordionItemContextValue {
  itemId: string | null;
}

const accordionContextDefault = {
  activeAccordion: null,
  setActiveAccordion: () => {}
};

const accordionItemContextDefault = {
  itemId: null
};

export const AccordionContext = createContext<AccordionContextValue>(accordionContextDefault);

export const AccordionItemContext = createContext<AccordionItemContextValue>(
  accordionItemContextDefault
);

export const AccordionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [activeAccordion, setActiveAccordion] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider
      value={{
        activeAccordion,
        setActiveAccordion: activeAccordion => setActiveAccordion(activeAccordion)
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextValue => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(`useAccordion must be use within AccordionProvider`);
  }

  return context;
};

export const AccordionItemProvider: React.FC<React.PropsWithChildren<{ itemId: string }>> = ({
  children,
  itemId
}) => {
  return (
    <AccordionItemContext.Provider
      value={{
        itemId
      }}
    >
      {children}
    </AccordionItemContext.Provider>
  );
};

export const useAccordionItem = (): AccordionItemContextValue => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(`useAccordionItem must be use within AccordionItemProvider`);
  }

  return context;
};
