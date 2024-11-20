import { create } from 'zustand';

// Define the Zustand store
const useStore = create(() => ({
  isDarkMode: true,
}));

export default useStore;
