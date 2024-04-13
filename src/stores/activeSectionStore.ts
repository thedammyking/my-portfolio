import { createStore } from 'zustand/vanilla';

import { ContentSection } from '@/types/globals';

export type ActiveSectionState = {
  activeSection: ContentSection;
};

export type ActiveSectionActions = {
  setActiveSection: (activeSection: ContentSection) => void;
};

export type ActiveSectionStore = ActiveSectionState & ActiveSectionActions;

export const defaultInitState: ActiveSectionState = {
  activeSection: ContentSection.About
};

export const createActiveSectionStore = (initState: ActiveSectionState = defaultInitState) => {
  return createStore<ActiveSectionStore>()(set => ({
    ...initState,
    setActiveSection: activeSection => set(() => ({ activeSection }))
  }));
};
