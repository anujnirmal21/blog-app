import { create } from "zustand";

export const useSideBarStore = create((set, get) => {
  return {
    sideBarState: "Home",
    setSideBarState: (state) => set({ sideBarState: state }),
  };
});
