'use client';

import React from 'react';
import { createContext, type ReactNode, useContext, useRef } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type ActiveSectionStore, createActiveSectionStore } from '@/stores/activeSectionStore';

export const ActiveSectionStoreContext = createContext<StoreApi<ActiveSectionStore> | null>(null);

export interface ActiveSectionStoreProviderProps {
  children: ReactNode;
}

const ActiveSectionStoreProvider = ({ children }: ActiveSectionStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ActiveSectionStore>>();
  if (!storeRef.current) {
    storeRef.current = createActiveSectionStore();
  }

  return (
    <ActiveSectionStoreContext.Provider value={storeRef.current}>
      {children}
    </ActiveSectionStoreContext.Provider>
  );
};

export const useActiveSectionStore = <T,>(selector: (store: ActiveSectionStore) => T): T => {
  const activeSectionStoreContext = useContext(ActiveSectionStoreContext);

  if (!activeSectionStoreContext) {
    throw new Error(`useActiveSectionStore must be use within ActiveSectionStoreProvider`);
  }

  return useStore(activeSectionStoreContext, selector);
};

export default ActiveSectionStoreProvider;
