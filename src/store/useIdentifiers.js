import { create } from 'zustand';

export const useIdentifiers = create((set) => ({
  identifiers: [],
  setIdentifiers: (identifiers) => set({ identifiers }),
  clearIdentifiers: () => set({ identifiers: [] }),
}));
