import { Home, Compass, MessageCircle, User } from 'lucide-react'
import { useAppStore } from '@/store/appStore'

export function TabBar() {
  const { currentTab, setCurrentTab } = useAppStore()

  const tabs = [
    { id: 'home' as const, icon: Home, label: '首页' },
    { id: 'discover' as const, icon: Compass, label: '发现' },
    { id: 'messages' as const, icon: MessageCircle, label: '消息' },
    { id: 'profile' as const, icon: User, label: '我' },
  ]

  return (
    <div className="tab-bar bg-white border-t border-light-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = currentTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-colors ${
                isActive ? 'text-accent-primary' : 'text-light-500'
              }`}
            >
              <div className="relative">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {tab.id === 'messages' && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 bg-accent-primary text-white text-xs rounded-full flex items-center justify-center">
                    1
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
