import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/Card'
import { homeContent } from '@/data/mockData'
import { useAppStore } from '@/store/appStore'

export function HomePage() {
  const navigate = useNavigate()
  const { focusMode } = useAppStore()

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
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-light-900">首页</h1>
          {focusMode && (
            <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-medium rounded-full">
              专注
            </span>
          )}
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
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-light-500">暂无符合条件的内容</p>
            <p className="text-sm text-light-400 mt-2">关闭专注模式以查看更多内容</p>
          </div>
        )}
      </main>
    </div>
  )
}
