import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SettingItem {
  id: string
  label: string
  icon?: string
  description?: string
  type: 'switch' | 'navigate' | 'action' | 'timeLimit'
  value?: boolean | string
  hasSwitch?: boolean
  isOn?: boolean
  action?: string
  duration?: number
  options?: number[]
}

interface AppState {
  currentPage: string
  currentTab: string
  focusMode: boolean
  screenTimeLock: boolean
  screenTimeLimit: number
  screenTimeUsed: number
  showScreenTimeModal: boolean
  searchHistory: string[]
  settings: SettingItem[]
  setCurrentPage: (page: string) => void
  setCurrentTab: (tab: string) => void
  toggleFocusMode: () => void
  setScreenTimeLock: (enabled: boolean) => void
  setScreenTimeLimit: (minutes: number) => void
  incrementScreenTime: () => void
  resetScreenTime: () => void
  setShowScreenTimeModal: (show: boolean) => void
  addSearchHistory: (query: string) => void
  clearSearchHistory: () => void
  updateSetting: (id: string, updates: Partial<SettingItem>) => void
  resetSettings: () => void
}

const initialSettings: SettingItem[] = [
  { id: '1', label: '账号与安全', icon: 'Lock', type: 'navigate' },
  { id: '2', label: '隐私设置', icon: 'Users', type: 'navigate' },
  { id: '3', label: '通知设置', icon: 'Bell', type: 'navigate' },
  { id: '4', label: '兴趣仪表盘', icon: 'PieChart', type: 'action', action: 'dashboard' },
  { id: '5', label: '深色模式', icon: 'Moon', type: 'switch', hasSwitch: true, isOn: false },
  { id: '6', label: '自动播放', icon: 'Video', type: 'switch', hasSwitch: true, isOn: true },
  { id: '7', label: '省流量模式', icon: 'Sparkles', type: 'switch', hasSwitch: true, isOn: false },
  { id: '8', label: '高清画质', icon: 'Layers', type: 'switch', hasSwitch: true, isOn: true },
  { id: '9', label: '屏幕使用时间', icon: 'Clock', description: '每日使用时长限制', type: 'timeLimit', hasSwitch: true, isOn: false, duration: 30, options: [15, 30, 60, 90, 120] },
  { id: '10', label: '存储空间', icon: 'HardDrive', type: 'navigate', value: '2.3GB' },
  { id: '11', label: '通用设置', icon: 'Settings', type: 'navigate' },
  { id: '12', label: '关于小红书', icon: 'Layout', type: 'navigate' },
]

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentPage: 'home',
      currentTab: 'home',
      focusMode: false,
      screenTimeLock: false,
      screenTimeLimit: 30,
      screenTimeUsed: 0,
      showScreenTimeModal: false,
      searchHistory: ['问卷互填', '沈阳东北烤肉', '沈阳洗浴', '大模型应用一般做什么'],
      settings: initialSettings,
      setCurrentPage: (page) => set({ currentPage: page }),
      setCurrentTab: (tab) => set({ currentTab: tab }),
      toggleFocusMode: () => set((state) => ({ focusMode: !state.focusMode })),
      setScreenTimeLock: (enabled) => set({ screenTimeLock: enabled }),
      setScreenTimeLimit: (minutes) => set({ screenTimeLimit: minutes }),
      incrementScreenTime: () => set((state) => ({ screenTimeUsed: state.screenTimeUsed + 1 })),
      resetScreenTime: () => set({ screenTimeUsed: 0 }),
      setShowScreenTimeModal: (show) => set({ showScreenTimeModal: show }),
      addSearchHistory: (query) => set((state) => ({
        searchHistory: [query, ...state.searchHistory.filter(h => h !== query)].slice(0, 10)
      })),
      clearSearchHistory: () => set({ searchHistory: [] }),
      updateSetting: (id, updates) => set((state) => ({
        settings: state.settings.map(item =>
          item.id === id ? { ...item, ...updates } : item
        )
      })),
      resetSettings: () => set({ settings: initialSettings }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        settings: state.settings,
        searchHistory: state.searchHistory,
        focusMode: state.focusMode,
        screenTimeLock: state.screenTimeLock,
        screenTimeLimit: state.screenTimeLimit,
      }),
    }
  )
)