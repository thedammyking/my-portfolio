'use client';

import React, { createContext, FC, PropsWithChildren, useContext } from 'react';

import { Article } from '@/types/interfaces/article';
import { Experience } from '@/types/interfaces/experience';
import { About, Header } from '@/types/interfaces/home';
import { Project } from '@/types/interfaces/project';

export interface Data {
  header?: Header | null;
  about?: About | null;
  experience?: Experience[];
  projects?: Project[];
  articles?: Article[];
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
