import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Card } from '@/components/Card'
import { Switch } from '@/components/Switch'
import { homeContent, discoverCategories } from '@/data/mockData'
import { useAppStore } from '@/store/appStore'

export function DiscoverPage() {
  const navigate = useNavigate()
  const { focusMode, toggleFocusMode } = useAppStore()
  const [activeCategory, setActiveCategory] = useState('推荐')

  const filteredContent = focusMode 
    ? homeContent.filter(item => 
        item.category === 'knowledge' || 
        item.category === 'tool' || 
        item.category === 'science'
      )
    : homeContent

  return (
    <div className="page-content bg-light-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-light-100 px-4 py-3">
        <div className="flex items-center gap-3 mb-4">
          <button className="flex items-center gap-2 px-3 py-2 bg-light-100 rounded-full">
            <SlidersHorizontal size={16} className="text-light-500" />
            <span className="text-sm font-medium text-light-700">专注</span>
            <Switch isOn={focusMode} onChange={toggleFocusMode} />
          </button>
          <div className="flex-1 flex items-center gap-6">
            <button className="text-light-700 font-semibold border-b-2 border-accent-primary pb-1">关注</button>
            <button className="text-light-500">发现</button>
            <button className="text-light-500">同城</button>
          </div>
          <button 
            onClick={() => navigate('/search')}
            className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center"
          >
            <Search size={18} className="text-light-500" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {discoverCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-light-900 text-white' 
                  : 'bg-light-100 text-light-600 hover:bg-light-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      <main className="px-4 py-4 space-y-4">
        {filteredContent.map(item => (
          <Card 
            key={item.id} 
            content={item} 
            onClick={() => navigate(`/comments/${item.id}`)}
          />
        ))}
      </main>
    </div>
  )
}
