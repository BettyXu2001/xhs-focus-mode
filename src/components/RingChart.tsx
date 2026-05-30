import { useEffect, useState } from 'react'
import { InterestItem } from '@/data/mockData'

interface RingChartProps {
  data: InterestItem[]
}

export function RingChart({ data }: RingChartProps) {
  const [animatedData, setAnimatedData] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data.map(d => d.percentage))
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [data])

  const size = 200
  const strokeWidth = 24
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  let currentAngle = 0
  const circles = data.map((item, index) => {
    const percentage = animatedData[index] || 0
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
    const strokeDashoffset = -currentAngle * circumference / 360
    currentAngle += (percentage / 100) * 360

    return (
      <circle
        key={item.name}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={item.color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        className="ring-chart-circle transition-all duration-1000 ease-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transitionDelay: `${index * 100}ms`
        }}
      />
    )
  })

  return (
    <div className="ring-chart-container">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth={strokeWidth}
        />
        {circles}
      </svg>
      <div className="ring-chart-center">
        <p className="text-3xl font-bold text-light-900">
          {animatedData.reduce((a, b) => a + b, 0)}%
        </p>
        <p className="text-xs text-light-500">内容偏好</p>
      </div>
    </div>
  )
}
