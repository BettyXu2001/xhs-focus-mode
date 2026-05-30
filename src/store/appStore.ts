import { create } from 'zustand'

interface AppState {
  currentPage: string
  currentTab: string
  focusMode: boolean
  screenTimeLock: boolean
  searchHistory: string[]
  setCurrentPage: (page: string) => void
  setCurrentTab: (tab: string) => void
  toggleFocusMode: () => void
  setScreenTimeLock: (enabled: boolean) => void
  addSearchHistory: (query: string) => void
  clearSearchHistory: () => void
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'home',
  currentTab: 'home',
  focusMode: false,
  screenTimeLock: false,
  searchHistory: ['问卷互填', '沈阳东北烤肉', '沈阳洗浴', '大模型应用一般做什么'],
  setCurrentPage: (page) => set({ currentPage: page }),
  setCurrentTab: (tab) => set({ currentTab: tab }),
  toggleFocusMode: () => set((state) => ({ focusMode: !state.focusMode })),
  setScreenTimeLock: (enabled) => set({ screenTimeLock: enabled }),
  addSearchHistory: (query) => set((state) => ({
    searchHistory: [query, ...state.searchHistory.filter(h => h !== query)].slice(0, 10)
  })),
  clearSearchHistory: () => set({ searchHistory: [] }),
}))
