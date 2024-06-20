import { create } from "zustand";

export const useCatalogStore = create((set) => ({
  begin_date: null,
  end_date: null,
  humans: 1,
  setBeginDate: (date) => set({ begin_date: date }),
  setEndDate: (date) => set({ end_date: date }),
  setHumans: (value) => set({ humans: value }),
}));
