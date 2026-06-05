import { ArrowLeft, TrendingUp, Clock, RefreshCw } from 'lucide-react'
import { RingChart } from '@/components/RingChart'
import { interestData } from '@/data/mockData'
import { useAppStore } from '@/store/appStore'

export function DashboardPage() {
  const { setCurrentPage } = useAppStore()

  const handleGoBack = () => {
    setCurrentPage('settings')
  }

  return (
    <div className="page-content bg-light-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-light-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleGoBack}
              className="w-9 h-9 rounded-full bg-light-100 flex items-center justify-center"
            >
              <ArrowLeft size={20} className="text-light-600" />
            </button>
            <h1 className="text-xl font-bold text-light-900">兴趣仪表盘</h1>
          </div>
          <button className="flex items-center gap-1 text-sm text-light-500 hover:text-light-700">
            <RefreshCw size={16} />
            <span>刷新</span>
          </button>
        </div>
      </header>
      <main className="px-4 py-4">
        <div className="flex justify-center mb-6">
          <RingChart data={interestData} />
        </div>
        <div className="bg-white rounded-2xl p-4 mb-4">
          <h2 className="text-sm font-semibold text-light-700 mb-4">兴趣分布</h2>
          <div className="space-y-3">
            {interestData.map((item, index) => (
              <div key={item.name} className="interest-item" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-light-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-light-900">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-light-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-accent-secondary" />
              <span className="text-xs text-light-500">本周增长</span>
            </div>
            <p className="text-2xl font-bold text-light-900">+12%</p>
            <p className="text-xs text-light-400 mt-1">较上周</p>
          </div>
          <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-accent-blue" />
              <span className="text-xs text-light-500">活跃天数</span>
            </div>
            <p className="text-2xl font-bold text-light-900">28</p>
            <p className="text-xs text-light-400 mt-1">本月</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4">
          <h2 className="text-sm font-semibold text-light-700 mb-4">偏好趋势</h2>
          <div className="flex items-end justify-between h-32 gap-2">
            {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => {
              const height = 30 + Math.random() * 70
              return (
                <div key={day} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-accent-primary to-accent-purple mb-2 transition-all duration-500"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                  <span className="text-xs text-light-400">{day}</span>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
