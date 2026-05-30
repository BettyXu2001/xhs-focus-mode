import { useState } from 'react'
import { ArrowLeft, Search, Camera, Trash2, Flame, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/appStore'
import { hotSearchList, guessSearchList } from '@/data/mockData'

export function SearchPage() {
  const navigate = useNavigate()
  const { searchHistory, addSearchHistory, clearSearchHistory } = useAppStore()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      addSearchHistory(query.trim())
    }
  }

  return (
    <div className="page-content bg-light-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-light-100 px-4 py-3">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-light-600" />
          </button>
          <div className="flex-1 flex items-center gap-2 bg-light-100 rounded-full px-4 py-2">
            <Search size={18} className="text-light-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="notebooklm生成ppt"
              className="flex-1 bg-transparent outline-none text-sm text-light-800 placeholder:text-light-400"
            />
            <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <Camera size={16} className="text-light-500" />
            </button>
          </div>
          <button 
            onClick={handleSearch}
            className="text-sm text-accent-primary font-medium"
          >
            搜索
          </button>
        </div>
        <div className="text-xs text-accent-primary bg-accent-primary/5 px-3 py-1.5 rounded-full w-fit">
          当前搜索已实时影响推荐
        </div>
      </header>
      <main className="px-4 py-4">
        {searchHistory.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-light-700">历史记录</h2>
              <button 
                onClick={clearSearchHistory}
                className="flex items-center gap-1 text-xs text-light-400 hover:text-light-600"
              >
                <Trash2 size={12} />
                <span>清空</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(item)
                    addSearchHistory(item)
                  }}
                  className="px-3 py-1.5 bg-light-100 rounded-full text-sm text-light-600 hover:bg-light-200 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-accent-orange" />
            <h2 className="text-sm font-semibold text-light-700">猜你想搜</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {guessSearchList.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(item)
                  addSearchHistory(item)
                }}
                className="text-left px-3 py-2 bg-white rounded-xl text-sm text-light-700 border border-light-100 hover:border-light-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Flame size={16} className="text-accent-primary" />
            <h2 className="text-sm font-semibold text-light-700">小红书热点</h2>
          </div>
          <div className="space-y-1">
            {hotSearchList.map((item) => (
              <button
                key={item.rank}
                onClick={() => {
                  setQuery(item.title)
                  addSearchHistory(item.title)
                }}
                className="w-full flex items-center gap-3 py-3 border-b border-light-100 last:border-0 hover:bg-light-50 transition-colors"
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.rank <= 3 ? 'bg-accent-primary text-white' : 'bg-light-100 text-light-500'
                }`}>
                  {item.rank}
                </span>
                <span className="flex-1 text-left text-sm text-light-700">{item.title}</span>
                {item.hot && (
                  <span className="px-2 py-0.5 bg-accent-primary/10 text-accent-primary text-xs rounded-full">热</span>
                )}
                {item.new && (
                  <span className="px-2 py-0.5 bg-accent-orange/10 text-accent-orange text-xs rounded-full">新</span>
                )}
                <span className="text-xs text-light-400">{item.views}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
