'use client';

import React, { createContext, FC, PropsWithChildren, useContext } from 'react';

import { About, Header } from '@/types/interfaces/home';

export interface Data {
  header?: Header | null;
  about?: About | null;
}

export const DataContext = createContext<Data>({});

const DataProvider: FC<PropsWithChildren<Data>> = ({ children, ...props }) => {
  return <DataContext.Provider value={props}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error(`useData must be use within DataProvider`);
  }

  return dataContext;
};

export default DataProvider;
