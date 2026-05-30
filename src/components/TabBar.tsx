import { Plus } from 'lucide-react'
import { useAppStore } from '@/store/appStore'

export function TabBar() {
  const { currentTab, setCurrentTab } = useAppStore()

  const tabs = [
    { id: 'home' as const, label: '首页' },
    { id: 'market' as const, label: '市集' },
    { id: 'plus' as const, icon: Plus, label: '+', isCenter: true },
    { id: 'messages' as const, label: '消息' },
    { id: 'profile' as const, label: '我' },
  ]

  return (
    <div className="tab-bar absolute bottom-0 left-0 right-0 bg-white border-t border-light-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id
          
          if (tab.isCenter) {
            const Icon = tab.icon!
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className="flex items-center justify-center w-12 h-8 bg-accent-primary rounded-xl shadow-lg text-white"
              >
                <Icon size={20} strokeWidth={2} />
              </button>
            )
          }
          
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-colors ${
                isActive ? 'text-accent-primary font-semibold' : 'text-light-500'
              }`}
            >
              <span className="text-sm">
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
