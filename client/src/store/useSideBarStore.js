import { create } from "zustand";

export const useSideBarStore = create((set, get) => {
  return {
    sideBarState: "Home",
    isSidebarOpen: false,
    setSideBarState: (state) => set({ sideBarState: state }),
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  };
});
