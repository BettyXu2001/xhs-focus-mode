import { useState } from 'react'
import { useAppStore } from '@/store/appStore'
import { homeCards, focusModeCards, hotSearchList, guessSearchList, commentsData, categories } from '@/data/mockData'

function Switch({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div className={`switch-track ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="switch-thumb" />
    </div>
  )
}

function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#ff2442' : 'none'} stroke={filled ? '#ff2442' : 'currentColor'} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function ContentCard({ card, onClick }: { card: typeof homeCards[0]; onClick?: () => void }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-2 shadow-sm border border-gray-100" onClick={onClick}>
      <img alt={card.title} className={`w-full object-cover ${card.imageHeight}`} src="https://picsum.photos/200/300" />
      <div className="p-2">
        <h3 className="text-gray-900 text-sm font-bold leading-tight">{card.title}</h3>
        {card.description && <p className="text-gray-500 text-xs mt-1">{card.description}</p>}
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            {card.authorTag && (
              <span className="bg-green-100 text-green-600 text-[10px] px-1 rounded w-fit">{card.authorTag}</span>
            )}
            <span className="text-gray-400 text-xs">{card.author}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <HeartIcon />
            <span className="text-xs">{card.likes > 1000 ? `${(card.likes / 1000).toFixed(1)}k` : card.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  const { setCurrentPage, toggleFocusMode, focusMode } = useAppStore()

  return (
    <div className="page active" id="page-home">
      <div className="px-4 py-2 flex items-center justify-between bg-white border-b border-gray-100 relative">
        <div className="flex items-center gap-2">
          <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('settings')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-xs">专注</span>
            <Switch active={focusMode} onClick={() => { toggleFocusMode(); setCurrentPage(focusMode ? 'home' : 'discover') }} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <div className="relative">
            <span className="text-gray-800 text-sm">关注</span>
            <span className="absolute -top-1 -right-2 bg-red-500 text-[8px] text-white rounded-full px-1">3</span>
          </div>
          <span className="text-primary text-sm font-bold">发现</span>
          <span className="text-gray-800 text-sm">同城</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('search')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-6 px-4 py-3 overflow-x-auto whitespace-nowrap bg-white text-sm text-gray-400 border-b border-gray-100">
        {categories.map((cat, i) => (
          <span key={cat} className={`category-tab ${i === 0 ? 'active' : ''}`}>{cat}</span>
        ))}
        <svg className="ml-auto text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
      <div className="scroll-container bg-gray-50 p-2">
        <div className="card-grid">
          {homeCards.map(card => (
            <ContentCard key={card.id} card={card} onClick={() => setCurrentPage('comments')} />
          ))}
        </div>
      </div>
    </div>
  )
}

function DiscoverPage() {
  const { setCurrentPage, toggleFocusMode } = useAppStore()

  return (
    <div className="page" id="page-discover">
      <div className="px-4 py-2 flex items-center justify-between bg-white border-b border-gray-100 relative">
        <div className="flex items-center gap-2">
          <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('settings')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
          <div className="flex items-center gap-1">
            <span className="text-gray-800 text-xs">专注</span>
            <Switch active={true} onClick={() => { toggleFocusMode(); setCurrentPage('home') }} />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <div className="relative">
            <span className="text-gray-800 text-sm">关注</span>
            <span className="absolute -top-1 -right-2 bg-red-500 text-[8px] text-white rounded-full px-1">3</span>
          </div>
          <span className="text-primary text-sm font-bold">发现</span>
          <span className="text-gray-800 text-sm">同城</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('search')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-6 px-4 py-3 overflow-x-auto whitespace-nowrap bg-white text-sm text-gray-400 border-b border-gray-100">
        {categories.slice(0, 3).map((cat, i) => (
          <span key={cat} className={`category-tab ${i === 0 ? 'active' : ''}`}>{cat}</span>
        ))}
      </div>
      <div className="scroll-container bg-gray-50 p-4">
        <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
          <svg className="text-green-500 text-5xl mb-4 mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
          <h2 className="text-gray-900 text-lg font-bold">专注已开启</h2>
          <p className="text-gray-500 text-sm mt-2">系统将为您精选深度内容，减少碎片化干扰。</p>
        </div>
        <div className="card-grid mt-4">
          {focusModeCards.map(card => (
            <ContentCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SearchPage() {
  const { setCurrentPage, searchHistory, addSearchHistory, clearSearchHistory } = useAppStore()
  const [query, setQuery] = useState('')

  return (
    <div className="page" id="page-search">
      <div className="p-4 flex items-center gap-3 bg-white border-b border-gray-100">
        <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('home')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <div className="flex-1 bg-gray-100 rounded-full h-9 flex items-center px-3 gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="notebooklm生成ppt"
            className="flex-1 bg-transparent outline-none text-gray-900 text-sm"
          />
        </div>
        <svg className="text-gray-800 text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
        <span className="text-gray-800 text-sm cursor-pointer" onClick={() => { if (query) addSearchHistory(query); }}>搜索</span>
      </div>
      <div className="px-4 text-xs text-gray-400 mb-4 bg-white">当前搜索已实时影响推荐</div>
      <div className="scroll-container px-4 bg-white">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-900 text-sm font-bold">历史记录</span>
            <svg className="text-gray-400 text-lg cursor-pointer" onClick={clearSearchHistory} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((item, i) => (
              <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1.5 rounded-full cursor-pointer" onClick={() => setQuery(item)}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-900 text-sm font-bold">猜你想搜</span>
            <svg className="text-gray-400 text-lg cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-y-3">
            {guessSearchList.map((item, i) => (
              <span key={i} className="text-gray-800 text-sm cursor-pointer">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 text-sm font-bold">小红书热点</span>
              <span className="bg-red-500 text-[10px] text-white px-1 rounded">HOT</span>
            </div>
            <span className="text-gray-400 text-xs">查看更多</span>
          </div>
          <div className="space-y-4">
            {hotSearchList.map((item) => (
              <div key={item.rank} className="flex items-center gap-3">
                <span className={`font-bold italic w-4 ${item.rank === 1 ? 'text-red-500' : 'text-orange-500'}`}>{item.rank}</span>
                <span className="text-gray-800 text-sm flex-1">{item.title}</span>
                <span className="text-gray-400 text-xs">{item.views}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CommentsPage() {
  const { setCurrentPage } = useAppStore()
  const [liked, setLiked] = useState<Record<string, boolean>>({})
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    '1': 5,
    '2': 128
  })

  const toggleLike = (id: string) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }))
    setLikeCounts(prev => ({
      ...prev,
      [id]: prev[id] + (liked[id] ? -1 : 1)
    }))
  }

  return (
    <div className="page" id="page-comments">
      <div className="p-4 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('home')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <div>
            <div className="text-gray-900 text-sm font-bold">玩梗加工资</div>
            <div className="text-gray-400 text-xs">共932条评论</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-primary text-white text-xs px-4 py-1.5 rounded-full font-bold">关注</button>
          <svg className="text-gray-800 text-2xl cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77l-7.1-4.42c.02-.16.06-.32.06-.48 0-.24-.06-.47-.15-.69l1.89-6.62c.22-.77-.27-1.56-1.06-1.56H5.05c-.8 0-1.29.79-1.06 1.56l1.89 6.62c-.09.22-.15.45-.15.69 0 .66.27 1.26.69 1.69l-7.1 4.42c-.52-.47-1.2-.77-1.96-.77-.03 0-.06 0-.08 0 .75.94 1.78 1.69 3.04 2.12 2.44.83 5.15.52 7.37-1.19 2.22 1.71 4.93 2.02 7.37 1.19 1.26-.43 2.29-1.18 3.04-2.12-.02 0-.05 0-.08 0z" />
          </svg>
        </div>
      </div>
      <div className="scroll-container p-4 bg-white">
        <div className="flex gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 text-sm font-bold">爱评论的人运气都不差</span>
              <div className="flex items-center gap-3 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 21 8.41 17.41 12 21 15.59 17.59 15z" /></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-1">欢迎大家在这里交流关于 AI 和产品设计的想法！</p>
          </div>
        </div>
        <div className="space-y-6">
          {commentsData.map(comment => (
            <div key={comment.id} className="flex gap-3">
              <img alt={comment.author} className="w-10 h-10 rounded-full shrink-0" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.author}`} />
              <div className="flex-1">
                <div className="text-gray-900 text-sm font-bold">{comment.author}</div>
                <p className="text-gray-800 text-sm mt-1">{comment.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 text-xs">{comment.time} {comment.location} 回复</span>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => toggleLike(comment.id)}>
                      <HeartIcon filled={liked[comment.id]} />
                      <span className="text-xs">{likeCounts[comment.id]}</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 bg-white flex items-center gap-3 border-t border-gray-100">
        <div className="flex-1 bg-gray-100 rounded-full h-9 flex items-center px-4">
          <span className="text-gray-400 text-sm">说点什么...</span>
        </div>
      </div>
    </div>
  )
}

function SettingsPage() {
  const { setCurrentPage } = useAppStore()

  return (
    <div className="page" id="page-settings">
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
        <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('home')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <span className="text-gray-900 text-lg font-bold">设置</span>
        <div className="w-6"></div>
      </div>
      <div className="scroll-container bg-gray-50">
        <div className="mt-4 space-y-1">
          <div className="px-4 py-4 flex items-center justify-between bg-white cursor-pointer border-b border-gray-50">
            <div className="flex items-center gap-3 text-gray-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-sm">账号与安全</span>
            </div>
            <svg className="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="px-4 py-4 flex items-center justify-between bg-white cursor-pointer border-b border-gray-50" onClick={() => setCurrentPage('dashboard')}>
            <div className="flex items-center gap-3 text-gray-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <span className="text-sm">内容偏好调节</span>
            </div>
            <svg className="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="px-4 py-4 flex items-center justify-between bg-white cursor-pointer border-b border-gray-50">
            <div className="flex items-center gap-3 text-gray-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span className="text-sm">关于我们</span>
            </div>
            <svg className="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardPage() {
  const { setCurrentPage } = useAppStore()

  return (
    <div className="page" id="page-dashboard">
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
        <svg className="text-gray-800 text-2xl cursor-pointer" onClick={() => setCurrentPage('settings')} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <span className="text-gray-900 text-lg font-bold">我的内容偏好</span>
        <span className="text-gray-800 text-xs cursor-pointer">探索更多</span>
      </div>
      <div className="scroll-container bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 text-xs">你最近偏好的内容分布如下</span>
            <div className="flex bg-gray-100 rounded-lg p-0.5">
              <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-md font-bold">近七日</span>
              <span className="px-3 py-1 text-gray-400 text-xs">近一日</span>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              <circle cx="100" cy="100" r="70" fill="none" stroke="#e5e5e5" strokeWidth="30" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#ff2442" strokeWidth="30" strokeDasharray="110 330" strokeDashoffset="0" transform="rotate(-90 100 100)" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#34c759" strokeWidth="30" strokeDasharray="80 360" strokeDashoffset="-110" transform="rotate(-90 100 100)" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#f97316" strokeWidth="30" strokeDasharray="50 390" strokeDashoffset="-190" transform="rotate(-90 100 100)" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#8b5cf6" strokeWidth="30" strokeDasharray="40 400" strokeDashoffset="-240" transform="rotate(-90 100 100)" />
              <text x="100" y="95" textAnchor="middle" fill="#1a1a1a" fontSize="24" fontWeight="bold">35%</text>
              <text x="100" y="115" textAnchor="middle" fill="#999" fontSize="10">其他</text>
            </svg>
          </div>
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 text-sm font-bold">美妆</div>
                  <div className="text-gray-400 text-xs">护肤、彩妆、发型</div>
                </div>
              </div>
              <Switch active={false} onClick={() => { }} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 text-sm font-bold">科技</div>
                  <div className="text-gray-400 text-xs">手机、平板、大模型</div>
                </div>
              </div>
              <Switch active={true} onClick={() => { }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const { currentPage } = useAppStore()

  const pages = ['home', 'discover', 'search', 'comments', 'settings', 'dashboard']
  const activePage = pages.includes(currentPage) ? currentPage : 'home'

  return (
    <div className="app-container">
      <script dangerouslySetInnerHTML={{
        __html: `
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('page-' + '${activePage}')?.classList.add('active');
      `}} />
      <HomePage />
      <DiscoverPage />
      <SearchPage />
      <CommentsPage />
      <SettingsPage />
      <DashboardPage />
    </div>
  )
}
