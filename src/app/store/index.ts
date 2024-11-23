import { create } from 'zustand';

interface StoreState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<StoreState>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
