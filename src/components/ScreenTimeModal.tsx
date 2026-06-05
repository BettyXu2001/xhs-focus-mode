import { useAppStore } from '@/store/appStore'

export function ScreenTimeModal() {
  const { 
    screenTimeUsed, 
    screenTimeLimit, 
    showScreenTimeModal, 
    setShowScreenTimeModal,
    resetScreenTime
  } = useAppStore()

  const handleContinue = () => {
    resetScreenTime()
    setShowScreenTimeModal(false)
  }

  const handleRemindLater = () => {
    setShowScreenTimeModal(false)
  }

  const progress = Math.min((screenTimeUsed / screenTimeLimit) * 100, 100)

  if (!showScreenTimeModal) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 mx-4 max-w-sm w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">注意休息哦～</h2>
          <p className="text-gray-600 mb-6">你已经使用了 {screenTimeUsed} 分钟，建议休息一下眼睛</p>
          
          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>已使用 {screenTimeUsed} 分钟</span>
              <span>限制 {screenTimeLimit} 分钟</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleContinue}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              继续使用
            </button>
            <button
              onClick={handleRemindLater}
              className="w-full py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
            >
              稍后提醒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
