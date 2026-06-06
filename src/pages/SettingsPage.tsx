import { ArrowLeft, Shield } from 'lucide-react'
import { SettingItem } from '@/components/SettingItem'
import { useAppStore } from '@/store/appStore'

export function SettingsPage() {
  const { 
    settings, 
    updateSetting, 
    setCurrentPage, 
    currentTab,
    setScreenTimeLock,
    setScreenTimeLimit
  } = useAppStore()

  const handleSwitchChange = (id: string, isOn: boolean) => {
    updateSetting(id, { isOn })
    if (id === '9') {
      setScreenTimeLock(isOn)
    }
  }

  const handleDurationChange = (id: string, duration: number) => {
    updateSetting(id, { duration })
    if (id === '9') {
      setScreenTimeLimit(duration)
    }
  }

  const handleItemClick = (action?: string) => {
    if (action === 'dashboard') {
      setCurrentPage('dashboard')
    }
  }

  const handleGoBack = () => {
    setCurrentPage(currentTab === 'discover' ? 'discover' : 'home')
  }

  return (
    <div className="page-content bg-light-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-light-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleGoBack}
            className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-light-600" />
          </button>
          <h1 className="text-xl font-bold text-light-900">设置</h1>
        </div>
      </header>
      <main className="px-4 py-4">
        <div className="bg-white rounded-2xl overflow-hidden mb-4">
          {settings.slice(0, 4).map(item => (
            <SettingItem
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item.action)}
            />
          ))}
        </div>
        <div className="bg-white rounded-2xl overflow-hidden mb-4">
          {settings.slice(4, 9).map(item => (
            <SettingItem
              key={item.id}
              item={item}
              onSwitchChange={handleSwitchChange}
              onDurationChange={handleDurationChange}
              onClick={() => handleItemClick(item.action)}
            />
          ))}
        </div>
        <div className="bg-white rounded-2xl overflow-hidden mb-4">
          {settings.slice(9, 13).map(item => (
            <SettingItem
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item.action)}
            />
          ))}
        </div>
        <div className="bg-gradient-to-r from-accent-primary/10 to-accent-purple/10 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Shield size={24} className="text-accent-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-light-800">账号安全中心</p>
              <p className="text-sm text-light-500">保护你的账号安全</p>
            </div>
            <ArrowLeft size={20} className="text-light-400 rotate-180" />
          </div>
        </div>
        <div className="mt-4 p-4 text-center">
          <p className="text-xs text-light-400">Version 7.88.0</p>
        </div>
      </main>
    </div>
  )
}