import { create } from "zustand";

const useUIStore = create((set) => ({
  language: "en",
  filter: "all",

  setLanguage: (language) => set({ language }),
  setFilter: (filter) => set({ filter }),
}));

export default useUIStore;
