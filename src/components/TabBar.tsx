import { useAppStore } from '@/store/appStore'

export function TabBar() {
  const { currentTab, setCurrentTab, setCurrentPage } = useAppStore()

  const tabs = [
    { id: 'home' as const, page: 'home', label: '首页' },
    { id: 'market' as const, page: 'discover', label: '市集' },
    { id: 'plus' as const, page: 'home', label: '+' },
    { id: 'profile' as const, page: 'settings', label: '我' },
  ]

  return (
    <div className="tab-bar bg-white border-t border-light-200 px-4 py-2 absolute bottom-0 left-0 right-0">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id
          const isPlus = tab.id === 'plus'

          if (isPlus) {
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setCurrentTab(tab.id)
                  setCurrentPage(tab.page)
                }}
                className="flex flex-col items-center -mt-6"
              >
                <div className="w-12 h-12 bg-accent-primary rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
              </button>
            )
          }

          return (
            <button
              key={tab.id}
              onClick={() => {
                setCurrentTab(tab.id)
                setCurrentPage(tab.page)
              }}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                isActive ? 'text-accent-primary' : 'text-light-500'
              }`}
            >
              <span className={`text-sm ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
